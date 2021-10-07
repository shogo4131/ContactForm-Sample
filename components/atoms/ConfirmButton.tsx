import React from 'react';

interface Props {
  isSubmitting: boolean;
  type: 'button' | 'submit' | 'reset';
  id: string;
  title: string;
}

// eslint-disable-next-line react/display-name
const ConfirmButton = React.memo(({ isSubmitting, type, id, title }: Props) => {
  return (
    <>
      <button disabled={isSubmitting} type={type} id={id} title={title}>
        確認画面へ移動します
      </button>
    </>
  );
});

export default ConfirmButton;
