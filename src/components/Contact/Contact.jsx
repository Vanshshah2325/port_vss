import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // new state for button loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, reply_to, message } = formData;

    if (!from_name || !reply_to || !message) {
      toast.warning("⚠️ Please fill all the input fields!");
      return;
    }

    setIsSending(true); // disable button and show “Sending…”

    emailjs
      .sendForm(
        "service_7qx8ydn",
        "template_h9l0isy",
        form.current,
        "1v0Ow2DZnBEtsaJJu"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("✅ Message sent successfully!");
          toast.success("You will get a reply soon.");
          setFormData({ from_name: "", reply_to: "", message: "" });
          form.current.reset();
          setIsSending(false); // re-enable button
        },
        (error) => {
          console.error(error.text);
          toast.error("❌ Failed to send message. Please try again later.");
          setIsSending(false); // re-enable button even on failure
        }
      );
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>

        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
              value={formData.from_name}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
              value={formData.reply_to}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
            />
            <Button
              type="submit"
              className="button"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </Button>
          </form>
        </Col>
      </Row>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
};

export default Contact;
