/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { SentryService } from '../utils/sentry.service';
import { EmailTemplates } from './email-templates.enum';
import { OmnihostEmails } from './omnihost-emails.enum';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('API_SENDGRID_API_KEY'));
    this.logger.log(`Sendgrid mail client connection initialized`);
  }

  /**
   * Send the reset password email.
   * @param params the email information.
   * @throws an error if the sending fails.
   * @returns whether the email sending succeeded.
   */
  async sendResetPasswordEmail(params: {
    email: string;
    resetPasswordLink: string;
  }): Promise<boolean> {
    return this.sendMail({
      to: params.email,
      from: OmnihostEmails.NOREPLY,
      subject: 'Password reset request',
      templateId: EmailTemplates.RESET_PASSWORD,
      dynamicTemplateData: {
        resetPasswordLink: params.resetPasswordLink,
      },
    });
  }

  /**
   * Send the export data email.
   * @param params the email information.
   * @throws an error if the sending fails.
   * @returns whether the email sending succeeded.
   */
  async sendExportDataEmail(params: {
    email: string;
    tableName: string;
    from: Date;
    to: Date;
    data: any[];
  }): Promise<boolean> {
    // Convert the data into a CSV for the attachment
    const csv = this.arrayToCSV(params.data);
    const attachment = Buffer.from(csv).toString('base64');

    return this.sendMail({
      to: params.email,
      from: OmnihostEmails.NOREPLY,
      subject: 'Export data request',
      templateId: EmailTemplates.EXPORT_DATA,
      dynamicTemplateData: {
        tableName: params.tableName,
        fromDate: params.from.toLocaleDateString('da-DK'),
        toDate: params.to.toLocaleDateString('da-DK'),
      },
      attachments: [
        {
          content: attachment,
          filename: `exported-${params.tableName}.csv`,
          type: 'text/csv',
          disposition: 'attachment',
        },
      ],
    });
  }

  /**
   * Send an email with provided data.
   * @param data the data needed to send a Sendgrid email.
   * @throws an error if the sending fails.
   * @returns whether the email sending succeeded.
   */
  private async sendMail(data: SendGrid.MailDataRequired): Promise<boolean> {
    try {
      const mailResponse = await SendGrid.send(data);
      // Log the response
      if (
        mailResponse &&
        mailResponse.length > 1 &&
        (mailResponse[0] as { statusCode: number }).statusCode === 202
      ) {
        this.logger.log(`Mail with templateId '${data.templateId}' has been sent to ${data.to}`);
        return true;
      } else {
        SentryService.log('warning', `Failed to send an email via Sendgrid`, this.logger, {
          data: data,
          sendgridResponse: mailResponse,
        });
      }
      return true;
    } catch (error) {
      this.logger.warn(`Failed to send email with the following data:`, data);
      SentryService.log(
        'error',
        `An error has occurred while sending an email!`,
        this.logger,
        error
      );
      throw error;
    }
  }
  private arrayToCSV(data) {
    const csv = data.map((row) => Object.values(row));
    csv.unshift(Object.keys(data[0]));
    return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
  }
}
