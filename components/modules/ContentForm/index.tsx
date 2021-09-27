import React from 'react';
import { ErrorMessage, Field, FormikErrors } from 'formik';

import styles from '../../../styles/form.module.css';
import { ValidationError } from '../../../types/validate.error';

interface Props {
  errors: FormikErrors<ValidationError>;
}

// eslint-disable-next-line react/display-name
const ContentForm: React.VFC<Props> = React.memo(({ errors }) => {
  return (
    <>
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
    </>
  );
});

export default ContentForm;
