import type { NextPage } from 'next';
import Head from 'next/head';
import { Formik, Form } from 'formik';

import Layout from '../components/layout/layout';
import ContactType from '../components/modules/ContactType';
import SearchService from '../components/modules/SearchService';
import CompanyForm from '../components/modules/CompanyForm';
import NameForm from '../components/modules/NameForm';
import MailForm from '../components/modules/MailForm';
import AddressForm from '../components/modules/AddressForm';
import ContentForm from '../components/modules/ContentForm';

import styles from '../styles/form.module.css';
import { validationSchema } from '../middleware/validate';

/**
 * 入力フォーム初期値
 */
const initialValues = {
  inquiryType: '',
  service: [],
  company: '',
  name: '',
  email: '',
  address: '',
  content: '',
};

const ContactForm: NextPage = () => {
  const title = 'サンプル株式会社';
  const description = 'サンプル株式会社のお問い合わせフォーム';

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    alert('送信が完了しました');
    console.log(values);

    resetForm();
  };

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
              <ContactType errors={errors} />
            </div>
            <div className={styles.formField}>
              <SearchService errors={errors} />
            </div>
            <div className={styles.formField}>
              <CompanyForm errors={errors} />
            </div>
            <div className={styles.formField}>
              <NameForm errors={errors} />
            </div>
            <div className={styles.formField}>
              <MailForm errors={errors} />
            </div>
            <div className={styles.formField}>
              <AddressForm errors={errors} />
            </div>
            <div className={styles.formField}>
              <ContentForm errors={errors} />
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
