import React from 'react'
import "./seminarStyle.css"

const Seminars = () => {
    return (
        <div>

            <section id="seminars" className="padding-medium" style={{ marginBottom: 0 }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8  smnr-left" />
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 smnr-right">
                            <div className="col-sm-4 col-xl-4 seminar-txt">
                                <div className="outer-1">
                                    <div className="inner-1 text-center">
                                        <h2 className="seminar-heading">Meetups</h2>
                                        <p className="seminar-text  my-md-5 my-sm-0 ">
                                            {" "}
                                            If you are looking to start your journey within the eCommerce
                                            industry, or looking to set up an online business or become a
                                            successful Amazon seller, then join us at one of our Meetups
                                            near you to know everything you need to know to take the leap
                                            and become a successful digital entrepreneur.
                                        </p>
                                        <a
                                            href="https://ec.com.pk/seminar"
                                            style={{
                                                padding: "10px 30px",
                                                borderRadius: 40,
                                                color: "#030303",
                                                background: "white",
                                                fontSize: 16
                                            }}
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Seminars