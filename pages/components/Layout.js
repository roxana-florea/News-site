import Link from "next/link";

export default function Layout({children}) {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                 Home 
                </Link>
                <Link href="/politics">
                Politics
                </Link>
                <Link href="/sports">
                 Sports
                </Link>
                <Link href="/business">
                 Business
                </Link>
                      
            </div>
            {children}
            <div>footer</div>
        </div>
    )
}