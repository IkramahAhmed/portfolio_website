import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleStatee, setTogglestate] = useState(0);

  const toggleTab = (index) => {
    setTogglestate(index);
  };
  return (
    <section className="section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>

            <h3 className="services__title">React dec</h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(1)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleStatee === 1
                ? "services__model active-model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>{toggleTab(0)}}></i>

              <h3 className="services__model-title">React dec</h3>
              <p className="services__model-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                unde excepturi? Voluptate maxime dignissimos facere.
              </p>

              <ul className="services__model-services-grid">
                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet .
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>

            <h3 className="services__title">React dec</h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(2)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div  className={
              toggleStatee === 2
                ? "services__model active-model"
                : "services__model"
            }>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>{toggleTab(0)}}></i>

              <h3 className="services__model-title">React dec</h3>
              <p className="services__model-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                unde excepturi? Voluptate maxime dignissimos facere.
              </p>

              <ul className="services__model-services-grid">
                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur .
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet .
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>

            <h3 className="services__title">React dec</h3>
          </div>

          <span className="services__button" onClick={()=>{toggleTab(3)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div  className={
              toggleStatee === 3
                ? "services__model active-model"
                : "services__model"
            }>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>{toggleTab(0)}}></i>

              <h3 className="services__model-title">React dec</h3>
              <p className="services__model-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                unde excepturi? Voluptate maxime dignissimos facere.
              </p>

              <ul className="services__model-services-grid">
                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet .
                  </p>
                </li>

                <li className="services__model-services">
                  <i className="uil uil-check-circle services__model-icon"></i>

                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
