import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
function Contact() {
  return (
      <div>
          <h2
              style={{
                  textAlign: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "steelblue",
                  paddingTop: "50px",
              }}
          >
              Contact
          </h2>
          <h4 style={{textAlign: "center",fontSize: "23px",fontWeight: "bold",color: "steelblue"}}> N’hésitez pas à me contacter, même pour un simple renseignement… </h4>
          <div
              style={{
                  textAlign: "left",
                  paddingBottom: "50px",
                  fontWeight: "900px",
                  paddingLeft: "70px",
              }}
          >
              <ul>
                  <li>
                      {" "}
                      <span style={{fontSize: "25px", padding:"10px", color: "skyblue", fontWeight:"bold"}} >Adresse :</span>
                      37 Avenue de l'UMA
                      <br/>
                      La Soukra 2036 Ariana Tunisie
                  </li>

                  <br />
                  <li>
                      {" "}
                      <span style={{fontSize: "25px", padding:"10px", color: "skyblue", fontWeight:"bold"}}>Telephone :</span>
                      (216) 50 180 977
                  </li>

                  <br />
                  <li>
                      {" "}
                      <span style={{fontSize: "25px", padding:"10px", color: "skyblue", fontWeight:"bold"}}>Email :</span>
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
                          src="https://img.over-blog-kiwi.com/2/24/46/04/20170127/ob_4b0313_contacts.jpg"
                          style={{
                              width: "1000px",
                              height: "300px",
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