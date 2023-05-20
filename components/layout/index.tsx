import React from 'react'
import Navbar from '../Navbar'
import { PropsWithChildren } from 'react'
import AppFooter from '../AppFooter'
function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <AppFooter/>
        </>

    )
}

export default Layout