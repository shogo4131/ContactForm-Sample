import * as Yup from 'yup';

export const validationSchema = Yup.object({
  inquiryType: Yup.string().required('お問い合わせ種別を選択してください'),
  service: Yup.array().min(1, '検討中のサービスを1つ以上選択してください'),
  name: Yup.string().required('ご担当者名は必須です'),
  company: Yup.string().required('御社名は必須です'),
  email: Yup.string()
    .email('メールアドレスの形式に誤りがあります')
    .required('メールアドレスは必須です'),
  content: Yup.string().required('お問い合わせ内容は必須です'),
});
