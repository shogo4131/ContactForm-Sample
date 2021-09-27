import * as Yup from 'yup';

import {
  INQUIRY_TYPE_ERROR,
  SERVICE_TYPE_ERROR,
  NAME_ERROR,
  COMPANY_ERROR,
  EMAIL_TYPE_ERROR,
  EMAIL_ERROR,
  CONTENT_ERROR,
} from '../constants/validate.error';

/**
 * バリデーションタイプ設定
 */
export const validationSchema = Yup.object({
  inquiryType: Yup.string().required(INQUIRY_TYPE_ERROR),
  service: Yup.array().min(1, SERVICE_TYPE_ERROR),
  name: Yup.string().required(NAME_ERROR),
  company: Yup.string().required(COMPANY_ERROR),
  email: Yup.string().email(EMAIL_TYPE_ERROR).required(EMAIL_ERROR),
  content: Yup.string().required(CONTENT_ERROR),
});
