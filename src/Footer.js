import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        {/* <h5 className="title"></h5> */}
                        <p>
                            “Delivering good software today is often better than perfect software tomorrow, so finish things and ship.”
                            ― David Thomas, The Pragmatic Programmer: From Journeyman to Master
            </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f pr-1"></i> Facebook</button>
                            </li>
                            <li className="list-unstyled">
                                <button type="button" class="btn btn-li"><i class="fab fa-linkedin-in pr-1"></i> Linkedin</button>
                            </li>
                            <li className="list-unstyled">
                                <button type="button" class="btn btn-git"><i class="fab fa-github pr-1"></i> Github</button>
                                <a href="https://github.com/Jaymak1981"></a>
                            </li>
                            {/* <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li> */}
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;