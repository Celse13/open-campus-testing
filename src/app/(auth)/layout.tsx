import Link from 'next/link';

const navLinks = [
    {name: "register", href: '/register'},
    {name: "login", href: '/login'},
    {name: "forgot password", href: '/forgot-password'}
];


type Props = {
    children: React.ReactNode
};


const AuthLayout = ({children}: Props) => {
    return (
        <>
            {navLinks.map(link => {
                return (<Link
                    href={link.href} key={link.name}
                >{link.name }</Link>
                )})}

            {children}
        </>
    )
}

export default AuthLayout;

