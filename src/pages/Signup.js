import { Button, Center, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../apis/apiClient';
import { EmailInput } from '../components/EmailInput';
import { PasswordInput } from '../components/PasswordInput';
import { useFormValidation } from '../hooks/useFormValidation';

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    isFormValid,
    email: emailValidation,
    password: passwordValidation,
  } = useFormValidation({ email, password });

  const submit = async () => {
    try {
      await apiClient.postSignup({ email, password });
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
        <EmailInput
          value={email}
          isValid={emailValidation.isValid}
          onChange={e => setEmail(e.target.value)}
          errorMessage={emailValidation.errorMessage}
        />
        <PasswordInput
          value={password}
          isValid={passwordValidation.isValid}
          onChange={e => setPassword(e.target.value)}
          errorMessage={passwordValidation.errorMessage}
        />
        <Button
          type="submit"
          data-testid="signup-button"
          onClick={submit}
          isDisabled={!isFormValid}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
