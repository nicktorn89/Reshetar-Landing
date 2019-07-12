import { useState } from 'react';

export const useFormState = (formObject: {[key: string]: string | number | boolean}) => {
  const [formState, changeFormState] = useState(formObject);

  const handleChangeForm = ({ name, value }: { name: string, value: number | string | boolean }) => {
    const clonedFormState = { ...formState };

    clonedFormState[name] = name === 'phoneNumber'
      ? (value as string).replace(/\s/g, '')
      : value;

    changeFormState(clonedFormState);
  };

  return { formState, handleChangeForm };
};
