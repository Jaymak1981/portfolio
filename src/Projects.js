import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const Projects = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                My Projects
        </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
                
        </p>

            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src="https://i.imgur.com/7XkeA2d.png"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="https://jaymak1981.github.io/Marvel-Trivia/">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="green-text">
                            <h5 className="font-weight-bold mt-2 mb-3">
                                <MDBIcon fas icon="chart-line" className="pr-2" />
                  Marvel Trivia
                </h5>
                        </a>
                        <h4 className="font-weight-bold mb-3">Marvel Trivia Game</h4>
                        <p>
                            The Marvel Cinematic Universe is a shared universe created by Marvel Studios, set primarily in the reality designated as Earth-199999 within Marvel's multiverse system. Starting with Iron Man, the universe is comprised mainly of films independently made by Marvel Studios, that are always set within this same universe, much like Marvel has done with their comics. I have been a Marvel fan since I was a kid, so this project was extra fun for me. This was built using HTML5, CSS and JavaScript.
              </p>
                        <MDBBtn color="success" rounded>
                            View more
              </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src="https://i.imgur.com/nQqnVDC.png"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="https://breaking-bad-info.herokuapp.com/">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="blue-text">
                            <h5 className="font-weight-bold mt-2 mb-3">
                                <MDBIcon icon="eye" className="pr-2" />
                  Breaking Bad
                </h5>
                        </a>
                        <h4 className="font-weight-bold mb-3">Breaking Bad Searcher</h4>
                        <p>
                            Breaking Bad was one of the most successful t.v. shows of all time. This app shows all the main characters of the show and a brief description of their on show life. This project was built using React and React-router.
              </p>
                        <MDBBtn color="success" rounded>
                            View more
              </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src="https://i.imgur.com/DOCmtvE.png"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="https://portfoliorater.herokuapp.com/">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="brown-text">
                            <h5 className="font-weight-bold mt-2 mb-3">
                                <MDBIcon icon="camera" className="pr-2" />
                  PortfolioRater
                </h5>
                        </a>
                        <h4 className="font-weight-bold mb-3">PortfolioRater</h4>
                        <p>
                            This application is named Portfolio Rater. It is a way for users to receive feedback on their professional portfolios. They will be able to post their portfolio to be listed on the website, where other users can comment on the portfolio and provide feedback.

                            This was a Collaborative between Skyler Bond, Chris Albanese and Jarod McGill  
              </p>
                        <MDBBtn color="success" rounded>
                            View more
              </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
                {/* <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <a href="#!" className="cyan-text">
                            <h5 className="font-weight-bold mt-2 mb-3">
                                <MDBIcon icon="phone" className="pr-2" />
                  Technology
                </h5>
                        </a>
                        <h4 className="font-weight-bold mb-3">Title of the news</h4>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit cupidatat proident
                            voluptatem quia numquam.
              </p>
                        <MDBBtn color="success" rounded>
                            MDBView more
              </MDBBtn>
                    </MDBCardBody>
                </MDBCol> */}
            </MDBRow>
        </section>
    );
}

export default Projects;