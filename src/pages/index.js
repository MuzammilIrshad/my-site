import * as React from "react";
import { Link, navigate } from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";



 const Home = () => {
     return <div>
         <Link to="/about/page1">Product page navigate</Link>
         <Layout title="LayOut Component">
         <Header title="Muzammil Irshad" />
        Hello world from Panacloud!<br/>
        <Link to="/about">About</Link>
        <button onClick={() => {
            navigate("/about")
             }}>About Page</button>
         </Layout>
         <br /><br />
     
        </div>;
}
export default Home;