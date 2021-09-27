import React from 'react';
import { Field } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const MailForm = React.memo(() => {
  return (
    <>
      <div className={styles.formFieldName}>
        <label htmlFor="email">
          メールアドレス
          <span className={styles.formInputRequisite}>必須</span>
          <ValidateErrorMessage name="email" />
        </label>
      </div>
      <div className={styles.formFieldInput}>
        <Field
          name="email"
          id="email"
          type="email"
          placeholder="メールアドレスを正しくご記入ください"
        />
      </div>
    </>
  );
});

export default MailForm;
