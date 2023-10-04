import React from "react";
import {Link} from "react-router-dom"
import {CustomLink} from "./CustomLink"
import LogoImage from "./LIF.png"


export function NavigationMenu()
{
    return(
<nav className="navigationMenu">
<Link to="/" className="Logo"><img src={LogoImage} alt="LOGO"></img></Link>
<ul className="LinkBox">
<CustomLink to="/FindAdd">Find and add movies</CustomLink>
<CustomLink to="Watched">Watched movies</CustomLink>
</ul>
</nav>

    )
}

