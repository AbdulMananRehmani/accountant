import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Cards from "../cardsection/Cards";
import Certified from "../certificate/Certified";
import Services from "../services/Services";
import Theory from "../theorysection/Theory";
import FAQ from "../faq/FAQ";
import Footer from "../footer/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Navbar style={{ height: "7rem", backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.3JTLXF8404xcS6LRxq4x2wHaB9&pid=Api&P=0&h=180"
              alt="logo"
              style={{ height: "4rem" }}
            />
          </Navbar.Brand>
          <Nav style={{ display: "flex", alignItems: "center" }}>
            <Link
              to=""
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >
              About
            </Link>
            <Link
              to=""
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >
              Services
            </Link>
            <Link
            to="" 
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >
              Sectors
            </Link>
            <Link
              to=""
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >
              Structures
            </Link>
            <Link
              to=""
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >
              Insights
            </Link>

            <Link
              to=""
              style={{
                marginRight: "35px",
                textDecoration: "none",
                color: "#333",
                fontSize: 18,
              }}
            >

         <BsFillTelephoneFill
                size="20px"
                color="blue"
                style={{ marginRight: 3 }}
              />   
               +335353533
         </Link>
                                  
             
       
            <Link>
              <button className="btn btn-primary" style={{

borderRadius:20,
width:"7rem",
height:39

              }}>Contact Us</button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Header />
      <Cards />
      <Certified />
      <Services />
      <Theory />
      <FAQ />
      <Footer />
    </>
  );
};

export default NavBar;
