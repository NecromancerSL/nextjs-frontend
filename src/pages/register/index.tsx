import { useState } from 'react';
import { Flex, Text, Center, Input, Button, Link } from '@chakra-ui/react';
import Head from 'next/head';

export default function Register() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    function handleRegister() {
        console.log(name);
        console.log(email);
        console.log(password);
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
                        placeholder="Nome"
                        _placeholder={{color: 'color.100'}}
                        type='email'
                        mb={3}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    
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
                        onClick={handleRegister}
                    >
                        Registrar
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}