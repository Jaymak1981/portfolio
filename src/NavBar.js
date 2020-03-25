import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="black" dark expand="md" fixed="top">
                            <MDBNavbarBrand href="/">
                                <strong>Jarod McGill</strong>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="./Projects.js">Projects</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="./Contact">Contact</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>

                    <MDBView src="https://media.tenor.com/images/0797ea67eae15fcb5ed4b0c219dff9c2/tenor.gif">
                        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                            <h2 className="animated fadeInLeftBig slower">Jarod McGill</h2>
                            <h5 className="animated fadeInRightBig slower">Developer | Designer</h5>
                            <br />
                            <p className="animated fadeInLeftBig slower delay-2s">“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
― John Woods</p>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify" class="animated fadeInDownBig slower delay-1s">I am a software engineer that has skills in both the back-end of web applications and the front-end. I want a deeper involvement in building out applications. In the next phase of my career, I not only want to use my design skills to make the application look beautiful, but I also want to work on the technically challenging facets of the application too. At my ideal company, I would like to work on a small team (5-8 people) that follows best practices like Test Driven Development and pair programming to help me learn and grow as a developer.</p>
                    </MDBContainer>
                </main>
            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;