import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Heading from "../Head";
import * as data from "./header.meta.json"
const Header = ()=>{

    //Basic Render Header Component
    return (
        <div>
           <Heading  title="Header Component" meta={data} />
        <main>
        <Navbar bg="transparent" variant="light">
        <img width="185px" src="https://res.cloudinary.com/graanacom/image/upload/h_100/v1592981512/graanaweb/LogoIsolated.png" alt="graana.com logo not" />
    <Nav className=" d-flex justify-content-end w-100">
      <Nav.Link href="#buy">Buy</Nav.Link>
      <Nav.Link href="#rent">Rent</Nav.Link>
      <Nav.Link href="#invest">Invest</Nav.Link>
      <Nav.Link href="#agents">Agents</Nav.Link>
      <Nav.Link href="#devlopers">Developers</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Button variant="outline-danger">Add Property</Button>
      <Nav.Link href="#blog">Sign in</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form> */}
  </Navbar></main> 


                </div>

        
    )
}

export default Header;
