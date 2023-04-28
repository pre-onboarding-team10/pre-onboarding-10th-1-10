export const validation = ({ email, password }) => {
  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;

  return {
    isFormValid: isEmailValid && isPasswordValid,
    email: {
      isValid: email ? isEmailValid : true,
      errorMessage: '@ 포함',
    },
    password: {
      isValid: password ? isPasswordValid : true,
      errorMessage: '8자 이상',
    },
  };
};
