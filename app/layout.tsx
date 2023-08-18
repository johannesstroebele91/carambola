import './globals.css'
import type {Metadata} from 'next'
import React from "react";


export const metadata: Metadata = {
    title: 'Caramaa',
    description: 'Habit Tracker created by Johannes Ströbele',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
