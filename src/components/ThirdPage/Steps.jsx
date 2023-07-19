import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Steps = () => {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <Form className="d-flex mt-5 ">
          <Form.Control
            type="search"
            placeholder="www.accountant.uk"
            className="me-2"
            aria-label="Search"
            style={{ borderRadius: 30, width: "30%", marginLeft: "30%" }}
          />
          <Button
            variant="outline-light bg-primary"
            style={{ borderRadius: 9 }}
          >
            Copy link
          </Button>
        </Form>{" "}
        <h1 className="text-center mt-5" style={{ fontWeight: "bold" }}>
          Its Easy To Earn Credits In Few Simple Steps
        </h1>
        <div className="col mt-5">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.lk_8naHkgTO2klKjXR4DLwHaHa&pid=Api&P=0&h=180"
            style={{
              marginRight: 30,
              color: "blue",
              height: "38%",
              paddingTop: 6,
              marginBottom: 6,
              borderRadius: 30,
            }}
          />
          <h4>MAKE SIGN UP</h4>
          <p>
            When your friend signup through your referral link, you will earn
            250 credits.
          </p>
        </div>
        <div className="col mt-5">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.bCW3lkYO6KlJS4SXAU65-AHaHi&pid=Api&P=0&h=180"
            style={{
              marginRight: 30,
              color: "blue",
              height: "38%",
              paddingTop: 6,
              marginBottom: 6,
              borderRadius: 30,
            }}
          />
          <h4>MAKE SIGN UP
</h4>
          <p>
          When your friend signup through your referral link, you will earn 250 credits.

          </p>
        </div>
        <div className="col mt-5">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.bGqHxPyfgZV9tfN_AlTn_wHaHa&pid=Api&P=0&h=180"
            style={{
              marginRight: 30,
              color: "blue",
              height: "38%",
              paddingTop: 6,
              marginBottom: 6,
              borderRadius: 30,
            }}
          />
          <h4>DO ENROLLS</h4>
          <p>
          When your friend enrolls a course, you will again earn 250 credits.

          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col">
<img src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="col bg-light">
        <Form>
      <Form.Group className="mb-3 pb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="First name" />
      </Form.Group> 
      <Form.Group className="mb-3 pb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="last name" />
      </Form.Group><Form.Group className="mb-3 pb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder="enter number " />
      </Form.Group><Form.Group className="mb-3 pb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group><Form.Group className="mb-3 pb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="pass" placeholder="enter your pass" />
      </Form.Group>
      <Button variant="warning">Submit</Button>{' '}
    </Form>
        </div>
      </div>
    </div>
  );
};

export default Steps;
