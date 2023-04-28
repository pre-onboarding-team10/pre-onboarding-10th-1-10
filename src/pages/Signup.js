import { Button, Center, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../apis/apiClient';
import { validation } from '../util/validation';
import { AuthInput } from '../components/AuthInput';
import useInput from '../hooks/useInput';

export const Signup = () => {
  const navigate = useNavigate();

  const { values, handleChange } = useInput();

  const { isFormValid, email, password } = validation(values);

  const submit = async () => {
    try {
      await apiClient.postSignup(values);
      navigate('/signin', { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Center w="100%" p="20px" flexDir="column">
      <Text fontSize="30" fontWeight="700" mb="20px">
        SignUp!
      </Text>
      <VStack w="500px" spacing="10px">
        <AuthInput
          type="email"
          isValid={email.isValid}
          onChange={handleChange}
          errorMessage={email.errorMessage}
        />
        <AuthInput
          type="password"
          isValid={password.isValid}
          onChange={handleChange}
          errorMessage={password.errorMessage}
        />
        <Button
          type="submit"
          data-testid="signup-button"
          onClick={submit}
          isDisabled={!isFormValid}
        >
          회원가입
        </Button>
      </VStack>
    </Center>
  );
};
