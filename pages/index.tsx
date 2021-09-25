import type { NextPage } from 'next';
import Head from 'next/head';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import Layout from '../components/layout/layout';
import styles from '../styles/form.module.css';
import { validationSchema } from '../middleware/validate';

const initialValues = {
  inquiryType: '',
  service: [],
  company: '',
  name: '',
  email: '',
  address: '',
  content: '',
};

const onSubmit = (values, { setSubmitting, resetForm }) => {
  alert('送信が完了しました');
  console.log(values);

  resetForm();
};

const ContactForm: NextPage = () => {
  const title = 'サンプル株式会社';
  const description = 'サンプル株式会社のお問い合わせフォーム';

  return (
    <Layout title={title} description={description}>
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, errors }) => (
          <Form>
            {!isValid && (
              <Head>
                <title>{Object.keys(errors).length}箇所エラーがあります</title>
              </Head>
            )}
            <div className={styles.formFiled}>
              <fieldset
                aria-required="true"
                aria-invalid={errors.inquiryType ? 'true' : 'false'}
              >
                <legend className={styles.formFieldName} id="labelInquiryType">
                  お問い合わせ種別
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="inquiryType">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </legend>
                <div className={styles.formFieldInput}>
                  <ul role="radiogroup" aria-labelledby="labelInquiryType">
                    <li>
                      <Field
                        name="inquiryType"
                        id="inquiryType01"
                        type="radio"
                        value="見積もり依頼"
                      />
                      <label htmlFor="inquiryType01">見積もり依頼</label>
                    </li>
                    <li>
                      <Field
                        name="inquiryType"
                        id="inquiryType02"
                        type="radio"
                        value="採用に関するお問い合わせ"
                      />
                      <label htmlFor="inquiryType02">試用版申込み</label>
                    </li>
                    <li>
                      <Field
                        name="inquiryType"
                        id="inquiryType03"
                        type="radio"
                        value="その他"
                      />
                      <label htmlFor="inquiryType03">その他</label>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
            <div className={styles.formField}>
              <fieldset
                aria-required="true"
                aria-invalid={errors.service ? 'true' : 'false'}
              >
                <legend className={styles.formFieldName} id="labeService">
                  検討中のサービス
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="service">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </legend>
                <div className={styles.formFieldInput}>
                  <ul role="group" aria-labelledby="labeService">
                    <li>
                      <Field
                        name="service"
                        id="service01"
                        type="checkbox"
                        value="サービスA"
                      />
                      <label htmlFor="service01">サービスA</label>
                    </li>
                    <li>
                      <Field
                        name="service"
                        id="service02"
                        type="checkbox"
                        value="サービスB"
                      />
                      <label htmlFor="service02">サービスB</label>
                    </li>
                    <li>
                      <Field
                        name="service"
                        id="service03"
                        type="checkbox"
                        value="サービスC"
                      />
                      <label htmlFor="service03">サービスC</label>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldName}>
                <label htmlFor="company">
                  御社名
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="company">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className={styles.formFieldInput}>
                <Field
                  name="company"
                  id="company"
                  type="text"
                  placeholder="会社名や団体名をご記入ください"
                  aria-required="true"
                  aria-invalid={errors.company ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldName}>
                <label htmlFor="name">
                  ご担当者名
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="name">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className={styles.formFieldInput}>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder="ご担当者様のお名前をご記入ください"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldName}>
                <label htmlFor="email">
                  メールアドレス
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="email">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className={styles.formFieldInput}>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder="メールアドレスを正しくご記入ください"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldName}>
                <label htmlFor="address">会社住所</label>
              </div>
              <div className={styles.formFieldInput}>
                <Field
                  name="address"
                  id="address"
                  component="textarea"
                  placeholder="住所をご記入ください"
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldName}>
                <label htmlFor="content">
                  お問い合わせ内容
                  <span className={styles.formInputRequisite}>必須</span>
                  <ErrorMessage name="content">
                    {(msg) => (
                      <span className={styles.invalidForm} aria-live="polite">
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </label>
              </div>
              <div className={styles.formFieldInput}>
                <Field
                  name="content"
                  id="content"
                  component="textarea"
                  placeholder="お問い合わせ内容をご記入ください"
                  aria-required="true"
                  aria-invalid={errors.content ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className={styles.formSubmit}>
              <button
                disabled={isSubmitting}
                type="submit"
                id="submit"
                title="入力内容を送信します"
              >
                入力内容の送信
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default ContactForm;
