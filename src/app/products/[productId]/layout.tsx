"use client";

import type {Metadata} from "next";
import {Inter} from "next/font/google";

import {useState} from "react";


const inter = Inter({subsets: ["latin"]});

export default function ProductLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const [input, setInput] = useState('');


    return (
        <html lang="en">
        <body className={inter.className}>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>

        {children}

        <h2>Featured Products</h2>

        </body>

        </html>
    );
}
