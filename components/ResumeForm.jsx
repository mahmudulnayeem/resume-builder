import React, { useState } from 'react';

const ResumeForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [education, setEducation] = useState([
    { degree: '', institute: '', startYear: '', endYear: '' }
  ]);
  const [workExperience, setWorkExperience] = useState([
    { position: '', company: '', startYear: '', endYear: '', description: '' }
  ]);

  const handleChange = (e, index, section) => {
    if (section === 'personalDetails') {
      setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
    } else if (section === 'education') {
      const newEducation = [...education];
      newEducation[index][e.target.name] = e.target.value;
      setEducation(newEducation);
    } else if (section === 'workExperience') {
      const newWorkExperience = [...workExperience];
      newWorkExperience[index][e.target.name] = e.target.value;
      setWorkExperience(newWorkExperience);
    }
  };

  const handleAdd = (section) => {
    if (section === 'education') {
      setEducation([...education, { degree: '', institute: '', startYear: '', endYear: '' }]);
    } else if (section === 'workExperience') {
      setWorkExperience([
        ...workExperience,
        { position: '', company: '', startYear: '', endYear: '', description: '' }
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalDetails);
    console.log(education);
    console.log(workExperience);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Personal Details</h2>
        <input
          type="text"
          name="name"
          value={personalDetails.name}
          onChange={(e) => handleChange(e, null, 'personalDetails')}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, null, 'personalDetails')}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={personalDetails.phone}
          onChange={(e) => handleChange(e, null, 'personalDetails')}
          placeholder="Phone"
        />
      </section>
      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Degree"
            />
            <input
              type="text"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Institute"
            />
            <input
              type="text"
              name="startYear"
              value={edu.startYear}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Start Year"
            />
            <input
              type="text"
              name="endYear"
              value={edu.endYear}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="End Year"
            />
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('education')}>
          Add Education
        </button>
      </section>
      <section>
        <h2>Work Experience</h2>
        {workExperience.map((work, index) => (
          <div key={index}>
            <input
              type="text"
              name="position"
              value={work.position}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Position"
            />
            <input
              type="text"
              name="company"
              value={work.company}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Company"
            />
            <input
              type="text"
              name="startYear"
              value={work.startYear}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Start Year"
            />
            <input
              type="text"
              name="endYear"
              value={work.endYear}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="End Year"
            />
            <textarea
              name="description"
              value={work.description}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Description"
            />
          </div>
        ))}
        <button type="button" onClick={() => handleAdd('workExperience')}>
          Add Work Experience
        </button>
      </section>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;
