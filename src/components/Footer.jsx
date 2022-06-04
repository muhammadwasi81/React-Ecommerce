import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  return (
    <footer>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="colored"
        limit={1}
      />
      <Container
        fluid
        style={{
          backgroundColor: '#f57224',
          color: '#ffffff',
        }}>
        <Container>
          <Row>
            <Col md={4} sm={12} className="my-5">
              <h1>Liberty Books</h1>
            </Col>
            <Col md={8} sm={12} className="my-5 text-sm-left">
              <Row>
                <Col md={6} sm={12} className="p-0">
                  <ul>
                    <h5 className="title">KEEP IN TOUCH</h5>
                    <li className="list-unstyled mb-2">
                      Feel Free to contact us any time. <br /> We are available
                      24/7.
                    </li>
                    <li className="list-unstyled mb-2">
                      <i className="fas fa-phone"></i> +92 4543232333
                    </li>
                    <li className="list-unstyled mb-2">
                      <span className="mr-3 text-white fs-3 p-2">
                        <FaFacebookF />{' '}
                      </span>
                      <span className="mr-3 text-white fs-3 p-2">
                        <BsInstagram />{' '}
                      </span>
                      <span className="mr-3 text-white fs-3 p-2">
                        <FiTwitter />{' '}
                      </span>{' '}
                      <span className="mr-3 text-white fs-3 p-2">
                        <FiLinkedin />{' '}
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col md={6} sm={12} className="p-0"></Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={12}>
              <p className="my-2 fs-5 justify-content-center d-flex">
                &copy; {new Date().getFullYear()} Liberty Books. All rights
                reserved
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
