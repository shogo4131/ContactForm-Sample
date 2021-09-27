import React from 'react';
import { ErrorMessage, Field, FormikErrors } from 'formik';

import styles from '../../../styles/form.module.css';
import { ValidationError } from '../../../types/validate.error';

interface Props {
  errors: FormikErrors<ValidationError>;
}

// eslint-disable-next-line react/display-name
const NameForm: React.VFC<Props> = React.memo(({ errors }) => {
  return (
    <>
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
    </>
  );
});

export default NameForm;
