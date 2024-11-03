import React, { useState } from "react";
import { db } from "../Contact/firebase"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/Contact/Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date().toLocaleDateString(), // Optional: to track when the message was sent
      });
      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__header">
        <h1>Contact Me</h1>
      </div>
      <div className="contact__container">
        <div className="contact__form" data-aos="fade-up">
          <form name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p className="contact__form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Enter name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p className="contact__form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p className="contact__form-group">
              <label htmlFor="message">Concern: </label>
              <textarea
                name="message"
                id="contact__message"
                cols="20"
                rows="5"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
            <button type="submit" className="contact__send-btn">
              Send
            </button>
          </form>
        </div>
        <div className="contact__info" data-aos="fade-up">
          <h3 className="contact__info-title">Let's Connect</h3>
          <div className="contact__info-details">
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <p>
                  <span>Address:&nbsp;&nbsp;</span> Karachi Pakistan
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <p>
                  <span>Phone:</span>&nbsp;&nbsp;(+92) 3104587003
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <p>
                  <span>Email:&nbsp;&nbsp;</span>abdulrehmansiddiqui771@gmail.com
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faSquareCheck} size="2x" />
                <span>FREELANCE</span>
              </li>
            </ul>
          </div>
          <div className="contact__social">
            <p className="contact__linkedin">
              <a
                href="https://www.linkedin.com/in/abdulrehman-siddiqui-0b250b264/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </p>  
            <p className="contact__github">
              <a
                href="https://github.com/Siddiquiweb"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </p>
            <p className="contact__Instagram]]">
              <a
                href="https://www.instagram.com/abdulrehmansid7/profilecard/?igsh=MXRubDdrZnh2ZXlneQ=="
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </p>
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
