import React from 'react';
import { ErrorMessage, Field, FormikErrors } from 'formik';

import styles from '../../../styles/form.module.css';
import { ValidationError } from '../../../types/validate.error';

interface Props {
  errors: FormikErrors<ValidationError>;
}

// eslint-disable-next-line react/display-name
const CompanyForm: React.VFC<Props> = React.memo(({ errors }) => {
  return (
    <>
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
    </>
  );
});

export default CompanyForm;
