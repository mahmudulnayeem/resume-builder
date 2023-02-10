import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo height={300} width={300} />
    <h1 className="mb-4" data-testid="hero-title">
     Resume Builder
    </h1>

    <p className="lead" data-testid="hero-lead">
    A resume builder app simplifies job search by allowing users to easily create a professional resume on-the-go with customizable templates, optimized keyword searches, & tips for improvement.
    </p>
  </div>
);

export default Hero;
