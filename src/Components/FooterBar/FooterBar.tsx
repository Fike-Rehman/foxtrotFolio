import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsGithub, BsEnvelopeFill, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import "./FooterBar.css";
import ViteLogo from "../../assets/Images/vitelogo.svg";
import ReactLogo from "../../assets/Images/reactlogo.svg";

const FooterBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className="custom-footer">
            <Navbar.Collapse className="w-100">
                <Nav className="d-flex justify-content-center w-100">
                    <Navbar.Brand href="#home" className="footer-brand d-none d-lg-block">
                        This project is built with
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={ReactLogo} alt="React Logo" className="react-vite-logo" />
                        </a> {""}
                        +
                        <a
                            href="https://vite.dev//"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={ViteLogo} alt="Vite Logo" className="react-vite-logo" />
                        </a>

                    </Navbar.Brand>

                    {/* Centered SiteMap link
                    <div className="footer-copyright">
                        TODO: sitemap link goes here
                    </div> */}

                    <Nav className="footer-links">
                        <Nav.Link
                            href="mailto:fike.rehman@hotmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsEnvelopeFill className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/frehman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsLinkedin className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/Fike-Rehman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsGithub className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://stackoverflow.com/users/586500/fike-rehman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsStackOverflow className="footer-icon" />
                        </Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default FooterBar;
