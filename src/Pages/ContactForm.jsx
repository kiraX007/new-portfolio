import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xrbggvlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contactForm py-5">
      <h1
        className="text-center intro mb-4"
        style={{ color: "#ff6b6b", fontFamily: "Comic Sans MS" }}
      >
        Contact <span className="color">Form</span>
      </h1>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXF6azd4MmNqbHcyd210aGVtanRyOWNyaTdtcmo0YmRiczhheGEzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nv6bOexvEyVV50U4Qz/giphy.gif"
              alt="Contact Gif"
              className="img-fluid rounded-circle border border-danger"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4 bg-light rounded-3 shadow-sm p-4"
            style={{ borderRadius: "15px" }}
          >
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="form-label"
                  style={{ fontWeight: "bold", color: "#ff6b6b" }}
                >
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  className="w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{ borderRadius: "10px" }} // Rounded input field
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label
                  className="form-label"
                  style={{ fontWeight: "bold", color: "#ff6b6b" }}
                >
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="w-100"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  required
                  style={{ borderRadius: "10px" }} // Rounded input field
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <Button
                  variant="danger"
                  type="submit"
                  className="rounded-pill shadow"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" autoClose={2000} position="top-right" />
    </div>
  );
};

export default ContactForm;
