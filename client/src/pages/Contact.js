import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
function Contact() {
  return (
      <div>
          <h4
              style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "steelblue",
                  paddingTop: "50px",
              }}
          >
              Contact
          </h4>
          <div
              style={{
                  textAlign: "left",
                  paddingBottom: "50px",
                  fontSize: "20px",
                  fontWeight: "900px",
                  paddingLeft: "70px",
              }}
          >
              <ul>
                  <li>
                      {" "}
                      <span>Adresse:</span>
                     Tunis, Soukra
                  </li>

                  <br />
                  <li>
                      {" "}
                      <span>Telephone:</span>
                      (216) 50 180 977
                  </li>

                  <br />
                  <li>
                      {" "}
                      <span>Email:</span>
                      <a href="houwaida.bennassib1@gmail.com">houwaida.bennassib1@gmail.com</a>
                  </li>
              </ul>
          </div>{" "}
          <Container>
              <Row className="justify-content-md-center">
                  <Col md="auto">
                      {" "}
                      <img
                          alt=""
                          src=""
                          style={{
                              width: "600px",
                              boxShadow: " 20px 0 20px 0",
                          }}
                      />
                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default Contact