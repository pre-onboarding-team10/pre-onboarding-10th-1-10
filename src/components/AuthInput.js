import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export const AuthInput = ({ type, value, isValid, onChange, errorMessage }) => {
  return (
    <FormControl isRequired isInvalid={!isValid}>
      <FormLabel htmlFor={type}>{type}</FormLabel>
      <Input
        name={type}
        type={type}
        value={value}
        onChange={onChange}
        data-testid={`${type}-input`}
      />
      {isValid ? null : <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
