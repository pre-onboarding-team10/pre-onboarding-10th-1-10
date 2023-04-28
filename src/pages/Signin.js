import { Button, Center, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../apis/apiClient';
import { useAuth } from '../hooks/useAuth';
import { validation } from '../util/validation';
import { AuthInput } from '../components/AuthInput';
import useInput from '../hooks/useInput';

export const Signin = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const { values, handleChange } = useInput({
    initialValues: { email: '', password: '' },
  });

  const { isFormValid, email, password } = validation(values);

  const submit = async () => {
    try {
      const { access_token } = await apiClient.postSignin(values);
      setAuth(access_token);
      navigate('/todo');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Center w="100%" p="20px" flexDir="column">
      <Text fontSize="30" fontWeight="700" mb="20px">
        SignIn!
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
          data-testid="signin-button"
          onClick={submit}
          isDisabled={!isFormValid}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
