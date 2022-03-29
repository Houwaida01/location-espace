import React from "react";
const Footer = () => {
    return (
      
        <footer
            className="w-100 py-2 flex-shrink-0"
        >
            <div className="container py-1">
                <div className="row gy-2 gx-1">
                    <div className="col-lg-10 col-md-1">
                        {/* <h5 style={{fontSize:"30px",textAlign:"center", color: "plum" }}>Location Espace Libre</h5> */}
                        <p style={{fontSize:"20px", color: "#FFE4C4" }}>
                            <address>
                                <span style={{color:"white" , padding:"5px"}}>Adresse:</span>
                                Tunis, Ariana, Soukra
                                <br />
                                <span style={{color:"white" , padding:"5px"}}>Telephone:</span>
                                50180977
                                <br />
                                <span style={{color:"white" , padding:"5px"}}>Email:</span>
                                <a style={{color:"white" , textDecoration:"none", padding:"5px"}} href="houwaida.bennassib1@gmail.com">houwaida.bennassib1@gmail.com</a>
                            </address>
                        </p>
                        <p style={{fontSize:"17px", color: "white" }}>
                            © 2021. All rights reserved. <br />
                            Site développé par : Ben Nassib Houwaida{" "}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <ul
                            className="list"
                            style={{ fontSize: "18px", paddingTop: "30px" }}
                        >
                            <li>
                                <a href="/">Accueil</a>
                            </li>
                            <li>
                                <a href="/annonce">Annonce</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-2 col-md-6"
                        style={{ textAlign: "center" }}
                    >
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
