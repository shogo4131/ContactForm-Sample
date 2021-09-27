import React from 'react';
import { ErrorMessage } from 'formik';

import styles from '../../styles/form.module.css';

interface ErrorMessageProps {
  name: string;
}

const ValidateErrorMessage: React.VFC<ErrorMessageProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <span className={styles.invalidForm} aria-live="polite">
          {msg}
        </span>
      )}
    </ErrorMessage>
  );
};

export default ValidateErrorMessage;
