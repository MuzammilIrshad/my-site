import * as React from "react";


export default function Fruits({ pageContext }) {
    console.log(pageContext);
    return <div>

        <h1>{pageContext.name}</h1>
        <h1>{pageContext.dec}</h1>
        <br />

    </div>;
}