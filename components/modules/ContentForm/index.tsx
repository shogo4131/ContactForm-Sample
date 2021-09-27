import React from 'react';
import { Field } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const ContentForm = React.memo(() => {
  return (
    <>
      <div className={styles.formFieldName}>
        <label htmlFor="content">
          お問い合わせ内容
          <span className={styles.formInputRequisite}>必須</span>
          <ValidateErrorMessage name="content" />
        </label>
      </div>
      <div className={styles.formFieldInput}>
        <Field
          name="content"
          id="content"
          component="textarea"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>
    </>
  );
});

export default ContentForm;
