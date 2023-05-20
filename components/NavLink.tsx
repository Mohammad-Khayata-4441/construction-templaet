import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useMemo } from 'react'
interface PropsType extends PropsWithChildren<LinkProps> {
    className?: any,
    activeClass?: string

}

export default function NavLink({ activeClass, ...rest }: PropsType) {
    const router = useRouter()
    const isActive = useMemo(() => router.pathname === rest.href, [rest.href, router.pathname])
    return (
        <Link  {...rest} className={`${isActive ? activeClass : ''} ${rest.className}`} >
            {rest.children}
        </Link>
    )
}
