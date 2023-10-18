import { useState, useContext } from 'react';
import { Flex, Text, Center, Input, Button, Link } from '@chakra-ui/react';
import Head from 'next/head';
import { AuthContext } from '@/context/AuthContext';

export default function Login() {

  const { signIn } = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function handleLogin() {
    await signIn({ email, password });
  }

    return(
        <>
            <Head>
                <title>Essencial - Produtos Ortopédicos</title>
            </Head>
            <Flex background="color.900" height="100vh" alignItems="center" justifyContent="center">
                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Input
                        background="color.400"
                        variant="filled"
                        size="lg"
                        placeholder="E-mail"
                        _placeholder={{color: 'color.100'}}
                        type='email'
                        mb={3}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        background="color.400"
                        variant="filled"
                        size="lg"
                        placeholder="Senha"
                        _placeholder={{color: 'color.100'}}
                        type='password'
                        mb={6}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        background="button.cta"
                        color="button.default"
                        size="lg"
                        _hover={{background: 'button.color.900'}}
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>

                    <Center mt={2}>
                        <Link href="/register">
                            <Text cursor="pointer"> Ainda não possui conta? <strong>Cadastre-se</strong></Text>
                        </Link>
                    </Center>
                </Flex>
            </Flex>
        </>
    )
}