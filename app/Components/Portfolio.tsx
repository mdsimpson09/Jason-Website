import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <Link className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/portfolio/1.jpg" alt="..." />
              </Link>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Precision</div>
                <div className="portfolio-caption-subheading text-muted">Meticulous Detailing</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <Link className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/portfolio/2.jpg" alt="..." />
              </Link>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Handcrafted Quality</div>
                <div className="portfolio-caption-subheading text-muted">Superior Craftsmanship</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <Link className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/portfolio/3.jpg" alt="..." />
              </Link>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Custom Designs</div>
                <div className="portfolio-caption-subheading text-muted">With you in mind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}