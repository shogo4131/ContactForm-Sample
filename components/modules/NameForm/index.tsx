import React from 'react';
import { Field } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const NameForm = React.memo(() => {
  return (
    <>
      <div className={styles.formFieldName}>
        <label htmlFor="name">
          ご担当者名
          <span className={styles.formInputRequisite}>必須</span>
          <ValidateErrorMessage name="name" />
        </label>
      </div>
      <div className={styles.formFieldInput}>
        <Field
          name="name"
          id="name"
          type="text"
          placeholder="ご担当者様のお名前をご記入ください"
        />
      </div>
    </>
  );
});

export default NameForm;
