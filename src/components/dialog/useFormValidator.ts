import { $, useSignal } from "@builder.io/qwik";

const useFormValidator = () => {
  const isEmailError = useSignal<boolean>(false);
  const isPasswordError = useSignal<boolean>(false);

  const resetErrors = $(() => {
    isEmailError.value = false;
    isPasswordError.value = false;
  });
  const isEmptyForm = $(
    (email: string | undefined, password: string | undefined) => {
      let hasErrors = false;
      if (!email) {
        isEmailError.value = true;
        hasErrors = true;
      }
      if (!password) {
        isPasswordError.value = true;
        hasErrors = true;
      }
      return hasErrors;
    },
  );

  const isValidEmail = $((email: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return !regex.test(email);
  });

  const validateForm = $(
    async (email: string | undefined, password: string | undefined) => {
      await resetErrors();
      const hasEmpyErrors = await isEmptyForm(email, password);
      if (hasEmpyErrors) {
        return;
      }
      const hasEmailErrors = await isValidEmail(email as string);
      if (hasEmailErrors) {
        isEmailError.value = true;
        return;
      }
    },
  );

  return {
    hasEmailErrors: isEmailError.value,
    hasPasswordErrors: isPasswordError.value,
    validateForm,
  };
};

export default useFormValidator;
