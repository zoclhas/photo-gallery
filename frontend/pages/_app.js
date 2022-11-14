import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    const lightTheme = createTheme({
        type: "light",
        theme: {},
    });

    const darkTheme = createTheme({
        type: "dark",
        theme: {},
    });

    return (
        <NextThemesProvider
            defaultTheme="dark"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
