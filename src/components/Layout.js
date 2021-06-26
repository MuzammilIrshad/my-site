import * as React from "react";

export default function Layout({ children, title }) {
    return <div>
        <h2>{title}</h2>
        {children}
        <br />

    </div>;
}