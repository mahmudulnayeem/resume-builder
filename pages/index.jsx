import React from 'react';

import Hero from '../components/Hero';
import ResumeForm from '../components/ResumeForm';
import ResumeTemplate2 from '../components/ResumeTemplate2';

export default function Index() {
  return (
    <>
      <Hero />
      <ResumeForm/>
      {/* <ResumeTemplate /> */}
      <ResumeTemplate2 />

    </>
  );
}
