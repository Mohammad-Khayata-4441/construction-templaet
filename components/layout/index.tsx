import React from 'react'
import Navbar from '../Navbar'
import { PropsWithChildren } from 'react'
function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>

    )
}

export default Layout