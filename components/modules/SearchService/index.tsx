import React from 'react';
import { Field, FormikErrors } from 'formik';

import ValidateErrorMessage from '../../atoms/ValidateErrorMessage';

import styles from '../../../styles/form.module.css';

import { ValidationError } from '../../../types/validate.error';

interface Props {
  errors: FormikErrors<ValidationError>;
}

// eslint-disable-next-line react/display-name
const SearchService: React.VFC<Props> = React.memo(({ errors }) => {
  return (
    <fieldset
      aria-required="true"
      aria-invalid={errors.service ? 'true' : 'false'}
    >
      <legend className={styles.formFieldName} id="labeService">
        検討中のサービス
        <span className={styles.formInputRequisite}>必須</span>
        <ValidateErrorMessage name="service" />
      </legend>
      <div className={styles.formFieldInput}>
        <ul role="group" aria-labelledby="labeService">
          <li>
            <Field
              name="service"
              id="service01"
              type="checkbox"
              value="サービスA"
            />
            <label htmlFor="service01">サービスA</label>
          </li>
          <li>
            <Field
              name="service"
              id="service02"
              type="checkbox"
              value="サービスB"
            />
            <label htmlFor="service02">サービスB</label>
          </li>
          <li>
            <Field
              name="service"
              id="service03"
              type="checkbox"
              value="サービスC"
            />
            <label htmlFor="service03">サービスC</label>
          </li>
        </ul>
      </div>
    </fieldset>
  );
});

export default SearchService;
