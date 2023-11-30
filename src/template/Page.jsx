import React from "react";
import { Link } from "react-router-dom";

const Links= [
    {
        name:"Home",
        href:"/home"
    },
    {
        name:"About",
        href:"/about"
    },
    {
        name:"Dashboard",
        href:"/dashboard"
    },
]
const Page = () => {
    return(
        <div>
            <button>
            {link.map( x => (
                <Link to={x.href}>{x.name}</Link>
            ) ) }

            </button>
        </div>
    )
}
export default Page;