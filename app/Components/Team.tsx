import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Team() {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="/assets/img/team/1.jpg" alt="..." />
              <h4>Jason Waynick</h4>
              <p className="text-muted">Owner, Lead Designer</p>
              <Link className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/jasonwaynick/?hl=en" aria-label="jason instagram"> <FaInstagram /></Link>
              <Link className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/jasonwaynick/?hl=en" aria-label="jason instagram"> <FaFacebookF /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="/assets/img/team/2.jpg" alt="..." />
              <h4>Anders Waynick</h4>
              <p className="text-muted">Lead Assistant</p>
              <Link className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/jasonwaynick/?hl=en" aria-label="jason instagram"> <FaInstagram /></Link>
              <Link className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/jasonwaynick/?hl=en" aria-label="jason instagram"> <FaFacebookF /></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
        </div>
      </div>
    </section>
  );
}