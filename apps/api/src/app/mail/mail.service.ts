import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
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
   * @returns whether the email sending succeeded.
   */
  async sendResetPasswordEmail(params: {
    email: string;
    resetPasswordLink: string;
  }): Promise<boolean> {
    return this.sendMail({
      to: params.email,
      from: OmnihostEmails.INFO,
      subject: 'Password reset request',
      templateId: EmailTemplates.RESET_PASSWORD,
      dynamicTemplateData: {
        resetPasswordLink: params.resetPasswordLink,
      },
    });
  }

  /**
   * Send an email with provided data.
   * @param data the data needed to send a Sendgrid email.
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
        this.logger.warn(`Failed to send an email via Sendgrid`, data, mailResponse);
      }
    } catch (error) {
      this.logger.error(`An error has occurred while sending an email!`, data, error);
    }
    return false;
  }
}
