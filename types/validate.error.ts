/**
 * バリデーションエラー
 */

export interface ValidationError {
  inquiryType: string;
  service: never[];
  name: string;
  company: string;
  email: string;
  content: string;
}
