import React from 'react';
import Logo from './Logo';

const Footer = () => (
  <footer className="bg-light p-1 text-center d-flex justify-content-center align-items-center" data-testid="footer">
    <Logo height={100} width={100} />
    <p data-testid="footer-text">
     Resume builder app v0.0.1
    </p>
  </footer>
);

export default Footer;
