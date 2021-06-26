import * as React from "react";
import * as styles from "./about.module.css";

import { Router } from "@reach/router";
import Product1 from "../components/Product1";

import { Link } from "gatsby";
import Main from "../components/Main";


export default function About() {
    return <div className={styles.div1}>
        About Page
        <br />
        <Link to="/">Main PAge</Link>
        <Router basepath="/about/">
            <Product1 path="/page1" />
            <Main path="/" />
        </Router>
        </div>;
}