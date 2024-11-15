import React from 'react'

export default function Layout(props) {
    const { children } = props
    const header = (
        <header >
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
            {}
        </header>
    )
    const footer = (
        <footer>
            <p>Made with 💗 by Harsh Tripathi</p>
        </footer>
    )
    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}