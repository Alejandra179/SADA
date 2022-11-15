import React from 'react'
import { Card } from 'react-bootstrap';
import '../assets/js/main.js'

export default function CardsSensores() {
  

 return (
    <>
    <section id="facts" className="facts" data-aos="fade-up">
      <div className="container">

        <div className="section-title">
          <h2>Última medición obtenida</h2>
        </div>

        <div className="row no-gutters">
        
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center" data-aos="fade-up">
            <Card>
            <div className="count-box">
              <i className="bi bi-thermometer-half"></i>
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Temperatura</strong></p>
            </div>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center" data-aos="fade-up" data-aos-delay="100">
          <Card>
            <div className="count-box">
              <i className="bi bi-moisture"></i>
              <span data-purecounter-start="0" data-purecounter-end="80" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Humedad</strong> </p>
            </div>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center" data-aos="fade-up" data-aos-delay="200">
          <Card>
            <div className="count-box">
              <i className="bi bi-cloud-rain-fill"></i>
              <span data-purecounter-start="0" data-purecounter-end="45" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Precipitación</strong></p>
            </div>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center" data-aos="fade-up" data-aos-delay="300">
          <Card>
            <div className="count-box">
              <i className="bi bi-cloud-fog2"></i>
              <span data-purecounter-start="0" data-purecounter-end="45" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Dirección del Viento</strong> </p>
            </div>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-center" data-aos="fade-up" data-aos-delay="300">
          <Card>
            <div className="count-box">
              <i className="bi bi-speedometer2"></i>
              <span data-purecounter-start="0" data-purecounter-end="45" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Velocidad del Viento</strong> </p>
            </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
    </>
);
}


