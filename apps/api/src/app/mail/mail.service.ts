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
   *
   * @param params
   */
  async sendForgotPasswordEmail(params: { email: string }) {
    const transport = await SendGrid.send({
      to: params.email,
      from: OmnihostEmails.info,
      subject: 'Password reset request',
      templateId: EmailTemplates.forgotPassword,
      dynamicTemplateData: {
        forgotPasswordLink: 'http://localhost:4200/forgot',
      },
    });
    console.log('transport', transport);

    // avoid this on production. use log instead :)
    // this.logger.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}
