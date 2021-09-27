import React from 'react';
import { Field, FormikErrors } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

import { ValidationError } from '../../../types/validate.error';

interface Props {
  errors: FormikErrors<ValidationError>;
}

// eslint-disable-next-line react/display-name
const ContactType: React.VFC<Props> = React.memo(({ errors }) => {
  return (
    <fieldset
      aria-required="true"
      aria-invalid={errors.inquiryType ? 'true' : 'false'}
    >
      <legend className={styles.formFieldName} id="labelInquiryType">
        お問い合わせ種別
        <span className={styles.formInputRequisite}>必須</span>
        <ValidateErrorMessage name="inquiryType" />
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
  );
});

export default ContactType;
