import React from 'react';
import { Field } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const CompanyForm = React.memo(() => {
  return (
    <>
      <div className={styles.formFieldName}>
        <label htmlFor="company">
          御社名
          <span className={styles.formInputRequisite}>必須</span>
          <ValidateErrorMessage name="company" />
        </label>
      </div>
      <div className={styles.formFieldInput}>
        <Field
          name="company"
          id="company"
          type="text"
          placeholder="会社名や団体名をご記入ください"
        />
      </div>
    </>
  );
});

export default CompanyForm;
