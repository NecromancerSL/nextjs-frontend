import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "../context/AuthContext";

const colors = {
    color: {
        900: '#33b864',
        400: '#1b1c29',
        100: '#c6c6c6'
    },
    button: {
        cta: '#fba931',
        default: '#FFF',
        grey: '#DFDFDF',
        danger: '#FF4040'
    },
    orange: {
        900: '#fba931'
    }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>  
        </ChakraProvider>
    )
}

export default MyApp;