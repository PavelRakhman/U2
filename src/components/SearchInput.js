import React from "react";


export function SearchInput(props){
return(
<div className="InputBox">
<input type="text"
value={props.searchValue}
onChange={(event)=>props.setSearchValue(event.target.value)}
 placeholder="Type to search for a movie"></input>
</div>

)    
}