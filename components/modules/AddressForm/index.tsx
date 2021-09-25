import React from 'react';
import { Field } from 'formik';

import styles from '../../../styles/form.module.css';

// eslint-disable-next-line react/display-name
const AddressForm = React.memo(({ errors }) => {
  return (
    <>
      <div className={styles.formFieldName}>
        <label htmlFor="address">会社住所</label>
      </div>
      <div className={styles.formFieldInput}>
        <Field
          name="address"
          id="address"
          component="textarea"
          placeholder="住所をご記入ください"
        />
      </div>
    </>
  );
});

export default AddressForm;
