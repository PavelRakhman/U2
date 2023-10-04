import React from "react";
import { MediaElement } from "./MediaElement";
import "./MediaScroller.css"

export function MediaScroller({movies})
{
return <div className="media-scroller snaps-inline">
{movies.map((movie,index)=>(<MediaElement movie={movie}></MediaElement>))}
</div>
}