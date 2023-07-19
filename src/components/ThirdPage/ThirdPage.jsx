import React from "react";
import "./ThirdPage.css";
import Button from "react-bootstrap/Button";
import Cards from "../cardsection/Cards";
import Form from "react-bootstrap/Form";
import Steps from "./Steps";

const Header = () => {
  return (
    <>
      <div
        className="container-fluid header"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5721005/pexels-photo-5721005.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30rem",
          position: "relative",
        }}
      >
        <div
          className="row imgdiv"
          style={{
            position: "absolute",
            top: "27%",
            left: "35%",
            zIndex: 2,
            color: "white",
          }}
        >
          <div className="col">
            <h2 style={{ fontWeight: 600, fontSize: 60 }}>
              {" "}
              Get{" "}
              <span style={{ color: "yellow", fontWeight: "600" }}>
                £350
              </span>{" "}
              Of Yours{" "}
            </h2>
            <h2 style={{ fontWeight: 600, marginTop: 6, marginBottom: 65 }}>
              {" "}
              Accountant Fees ,
            </h2>
            <Form className="d-flex mt-5">
              <Form.Control
                type="search"
                placeholder="Enter your Email"
                className="me-2"
                aria-label="Search"
                style={{ borderRadius: 40 }}
              />
              <Button
                variant="outline-success bg-warning"
                style={{ borderRadius: 9 }}
              >
                Invite
              </Button>
            </Form>{" "}
          </div>
        </div>
      </div>
      <Steps/>
    </>
  );
};

export default Header;
