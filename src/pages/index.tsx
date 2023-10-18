import Head from 'next/head';
import { Flex, Text} from '@chakra-ui/react';


export default function Home() {
    return (
        <>
            <Head>Essencial- Produtos Ortopédicos</Head>
            <Flex background="color.900" height="100vh" alignItems="center" justifyContent="center">
                <Text textAlign="center" alignContent="center">Essencial- Produtos Ortopédicos</Text>
            </Flex>
        </>
   
    )
}