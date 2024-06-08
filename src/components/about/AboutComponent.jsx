
import React from 'react'
import aboutimg from "../../assets/images/aboutimg.jpeg"

const AboutComponent = () => {
    return (
        <div>
            <section
                id="about"
                className="padding-medium "
                style={{ backgroundColor: "rgb(241, 188, 41)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-md-1 col-md-5">
                            <img
                                src={aboutimg}
                                alt="img"
                                className="img-fluid rounded-circle mt-5"
                            />
                        </div>
                        <div className="col-md-5 mt-5 mt-md-0 mx-4">
                            <div className="mb-3 m-1">
                                <p className="text-secondary pt-5">Learn more about us</p>
                                <h2 className="display-6 fw-semibold pt-4">About Us</h2>
                            </div>
                            <p>
                                {" "}
                                Our E-commerce Hub Lodhran, Pakistan to provide fast and reliable
                                e-commerce services to customers in Lodhran and surrounding areas.
                                Online shopping platform,Digital marketing,Product delivery. Fast and
                                secure payment processing,Real-time order tracking, Easy returns and
                                refunds,Dedicated customer support team.
                            </p>
                            <div className="d-flex">
                                <i className="ri-checkbox-circle-fill" />
                                <p className="ps-4">
                                    Engage with a worldwide community of inquisitive and imaginative
                                    individuals.
                                </p>
                            </div>
                            <div className="d-flex">
                                <i className="ri-checkbox-circle-fill" />
                                <p className="ps-4">
                                    Learn a skill of your choice from the experts around the world from
                                    various industries
                                </p>
                            </div>
                            <div className="d-flex">
                                <i className="ri-checkbox-circle-fill" />
                                <p className="ps-4">
                                    Learn a skill of your choice from the experts around the world from
                                    various industries
                                </p>
                            </div>
                            <a href="about.html" className="btn btn-danger px-5 py-3 my-3">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutComponent