import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="uk">
            <Head />
            <body>
                <Main />
                <script src="https://example.com/script.js" async></script>
                <NextScript />
            </body>
        </Html>
    );
}
