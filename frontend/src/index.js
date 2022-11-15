import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const lightTheme = createTheme({
    type: "light",
    theme: {},
});

const darkTheme = createTheme({
    type: "dark",
    theme: {},
});

root.render(
    <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
            light: lightTheme.className,
            dark: darkTheme.className,
        }}
    >
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </NextThemesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
