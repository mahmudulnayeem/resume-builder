import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
const ResumeForm = () => {
  const {user,isLoading}= useUser()
  const [personalDetails, setPersonalDetails] = useState({
    name: `${user?.given_name} ${user?.family_name}`,
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

if(isLoading) return<>Loading</>

return (

    <form onSubmit={handleSubmit} className=' p-4 rounded-md space-y-3 shadow-lg '>
      <section className='mb-10'>
      <h2 className='font-bold text-center text-emerald-500 text-xl mb-6'>Personal Details</h2>
        <div className='flex flex-col'>
        <Input
        id='name'
        type="text"
        name="name"
        intent='success'
        label='Name'
        required
        value={personalDetails?.name||""}
        onChange={(e) => handleChange(e, null, 'personalDetails')}
        placeholder="jon doe"
        />
        </div>
        <div>
          <div className=''>
          <Input
          intent='success'
          label='Email'
          id='email'
          type="email"
          name="email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, null, 'personalDetails')}
          placeholder="youremail@gmail.com"
        />
          </div>
        </div>
        <Input 
        intent='success'
        dashed 
        type="tel"
        label='Phone'
        id='phone'
        name="phone"
        value={personalDetails.phone}
        onChange={(e) => handleChange(e, null, 'personalDetails')}
        placeholder="+800 1234567891" />
      </section>
      <section className='mt-10'>
        <h2 className='font-bold text-center text-emerald-500 text-xl mb-6'>Education</h2>
        {education.map((edu, index) => (<>
          <div key={index} className='grid sm:grid-cols-2 grid-cols-1 sm:gap-2'>
            <Input
              type="text"
              name="degree"
              label='Degree'
              value={edu.degree}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Degree"
              intent='success'
            />
            <Input
              type="text"
              name="institute"
              label='Institute'
              value={edu.institute}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Institute"
              intent='success'
            />
            <Input
              type="date"
              name="startYear"
              label='Start Year'
              dashed
              value={edu.startYear}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="Start Year"
              intent='success'
            />
            <Input
              type='date'
              name="endYear"
              label='End Year'
              dashed
              value={edu.endYear}
              onChange={(e) => handleChange(e, index, 'education')}
              placeholder="End Year"
              intent='success'
            />
          </div>
          {education.length-1!==index&&<hr class="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>}
            </>
        ))}
        <div className='mt-2 flex justify-end '>
          <Button
            intent='success'
            onClick={() => handleAdd('education')}
          >
            <BsPlusSquare/>
         <span>Add Education</span>
        </Button>
          </div>
      </section>
      <section>
        <h2 className='font-bold text-center text-emerald-500 text-xl mb-6'>Work Experience</h2>
        {workExperience.map((work, index) => (
        <>  <div key={index}>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>

            
            <Input
              type="text"
              name="position"
              label='Position'
              id='position'
              intent='success'
              value={work.position}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Position"
            />
            <Input
              type="text"
              name="company"
              id='company'
              intent='success'
              label='Company / Institute'
              value={work.company}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="xyz company / abc institute"
            />
            <Input
              type="date"
              name="startYear"
              dashed
              intent='success'
              label='Start Year'
              value={work.startYear}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="Start Year"
            />
            <Input
              type="date"
              dashed
              intent='success'
              label='End Year'
              name="endYear"
              value={work.endYear}
              onChange={(e) => handleChange(e, index, 'workExperience')}
              placeholder="End Year"
            /></div>
            <div className='mt-3'>
          <label htmlFor="area" className='text-md font-semibold'>Description</label>
            <textarea
            className='border-2 border-teal-600 w-full  focus:outline-none rounded-md p-2'
            name="description"
            value={work.description}
            onChange={(e) => handleChange(e, index, 'workExperience')}
            placeholder="Description..."
            />
            </div>
          </div>
         {workExperience.length-1!==index&& <hr class="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>}</>
        ))}
        <div className='mt-2 flex justify-end '>
          <Button
            intent='success'
            onClick={() => handleAdd('workExperience')}
          >
            <BsPlusSquare/>
         <span>Add Work Experience</span>
        </Button>
          </div>
        
      </section>
      <Button intent='success' type="submit">Submit</Button>
    </form>
  );
};

export default ResumeForm;
