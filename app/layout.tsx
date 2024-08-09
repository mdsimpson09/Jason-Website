'use client'
import { ReactNode, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import ClientScriptLoader from './Components/ClientScriptLoader';
import './styles.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Ensuring client-side scripts execute after DOM is fully loaded
    const loadScripts = () => {
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.async = true;
      document.body.appendChild(bootstrapScript);

      const fontAwesomeScript = document.createElement('script');
      fontAwesomeScript.src = 'https://use.fontawesome.com/releases/v6.3.0/js/all.js';
      fontAwesomeScript.async = true;
      document.body.appendChild(fontAwesomeScript);
    };
    
    loadScripts();
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </head>
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="/">
              Forge & Flow
              {/* <img src="/assets/img/navbar-logo.svg" alt="Logo" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="/#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/#team">Team</a></li>
                <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
        <ClientScriptLoader />
      </body>
    </html>
  );
}