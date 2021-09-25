import React from 'react';
import { ErrorMessage, Field } from 'formik';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const MailForm = React.memo(({ errors }) => {
  return (
    <>
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
    </>
  );
});

export default MailForm;
