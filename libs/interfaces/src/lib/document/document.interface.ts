import { IBase } from '../base.interface';

export interface IDocument extends IBase {
  documentId: string;
  title: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard: boolean;
  documentName: string;
}

export interface IGetDocumentByIdResponse extends IDocument {
  downloadUrl: string;
}

export interface ICreateDocumentRequest {
  title: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document?: any;
}

export interface IUpdateDocumentRequest {
  title?: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard?: boolean;
}
