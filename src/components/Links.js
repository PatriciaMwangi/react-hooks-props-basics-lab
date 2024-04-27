import React from 'react'
export default function Links({github,linkedin}){
    return(
        <>
        <h3>Links</h3>
        <a 
        href={github}>
            {github}</a>
        <br></br>
       <a href={linkedin}
       >{linkedin}</a>
       console.log({linkedin})
       
        </>
    )
}