import React from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export function CustomLink({to, children,...props})
{
let RP = useResolvedPath(to)
let isActive = useMatch({path:RP.pathname, end:true})
return(
    <li className={isActive?"active":""}><Link to={to}{...props}><span>{children}</span></Link></li>
)
}

