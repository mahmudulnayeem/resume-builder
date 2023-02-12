import React from 'react';

const ResumeTemplate = ({ personalDetails, education, workExperience, skills }) => (
  <div>
    <header>
      <h1>{personalDetails?.name}Nayeem</h1>
      <p>{personalDetails?.email}mahmudulnayeem71@gmail.com | {personalDetails?.phone}01780064264</p>
    </header>
    <main>
      <section>
        <h2>Education</h2>
        <ul>
          {education?.map((edu, index) => (
            <li key={index}>
              <h3>{edu?.degree}</h3>
              <p>{edu?.institute}</p>
              <p>{edu?.startYear} - {edu?.endYear}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Work Experience</h2>
        <ul>
          {workExperience?.map((exp, index) => (
            <li key={index}>
              <h3>{exp?.position}</h3>
              <p>{exp?.company}</p>
              <p>{exp?.startYear} - {exp?.endYear}</p>
              <p>{exp?.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
    <footer>
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>
  </div>
);

export default ResumeTemplate;
