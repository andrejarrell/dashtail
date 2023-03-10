import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className="scroll-smooth antialiased" lang="en">
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <body className="bg-slate-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
