import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useMemo } from 'react'
interface PropsType extends PropsWithChildren<LinkProps> {
    className?: any,
    activeClass?: string

}

export default function NavLink(props: PropsType) {
    const router = useRouter()
    const isActive = useMemo(() => router.pathname === props.href, [props.href, router.pathname])
    return (
        <Link  {...props} className={`${isActive ? props.activeClass : ''} ${props.className}`} >
            {props.children}
        </Link>
    )
}
