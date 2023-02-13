import React from 'react'

function ResumeTemplate2() {

    const personalDetails = {
        name: 'Mynul Islam',
        email: 'mynul.sakil@gmail.com',
        phone: '01885277230',
        passion: 'Web Developer',
        address: 'Saver ,Dhaka',
        description: 'A technical leader with eight years of experience designing, planning, and implementing internal and external APIs at scale.',
        githubLink: 'https://github.com/sakil470004'
    }
    const education = [
        {
            degree: 'HSC',
            institute: 'Chomuhoni SA Collage',
            startYear: '2017',
            endYear: '2018',
        },
        {
            degree: 'SSC',
            institute: 'Protapgonj High School',
            startYear: '2015',
            endYear: '2016',
        },
    ]
    const workExperience = [
        {
            position: 'Web Developer Intern',
            company: 'Rapid Proposal',
            startYear: '2022',
            endYear: '2022',
            workDetails: ['Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders.', 'The Checkout API reduced integration issues by 18% over its 100,000+ users.'],
            description: 'We made The Start up prototype for the company',
        },
        {
            position: 'Web Developer',
            company: 'Github',
            startYear: '2020',
            endYear: '2022',
            workDetails: ['Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders.', 'The Checkout API reduced integration issues by 18% over its 100,000+ users.'],
            description: 'We made The Start up prototype for the company',
        },
        {
            position: 'Full Stack Web Developer',
            company: 'InternSala',
            startYear: '2022',
            endYear: '2023',
            workDetails: ['Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders.', 'The Checkout API reduced integration issues by 18% over its 100,000+ users.'],
            description: 'We made The Start up prototype for the company',
        },
    ]
    const skill = ['React JS', 'Tailwind CSS', 'HTML5', 'CSS3', 'Firebase']

    // for normal text size 16px;
    // for section titles and headers 21px;
    return (

        <div className='max-w-[1000px] mx-auto py-10 border-2'>
            {/* personal details */}
            <header className='mx-9 px-16 grid grid-cols-3 py-8 items-center'>
                <div className='col-span-1'>
                    <h1 className='text-4xl font-semibold mb-2'>{personalDetails?.name}</h1>
                    <p className='font-semibold'>{personalDetails?.passion}</p>
                    <p>{personalDetails?.address}</p>
                    <a target='_blank' href={personalDetails?.githubLink}>{personalDetails?.githubLink}</a>
                    <p>{personalDetails?.email}</p>
                    <p>{personalDetails?.phone}</p>
                </div>
                <p className='col-span-2'>{personalDetails?.description}</p>
            </header>
            <main className='mx-9 px-16 py-8'>
                {/* work experience */}
                <section>
                    <div className=' flex justify-between'>
                        <h1 className='text-indigo-500 text-2xl font-semibold'>Work Experience</h1>
                        <div className='w-3/4 border-indigo-500 border-t-4 mt-3'></div>
                    </div>
                    {
                        workExperience?.map(WE =>

                            <div>
                                <div className='flex justify-between items-center mt-4 mb-3'>
                                    <h3 className='text-xl font-semibold'>{WE?.position}</h3>
                                    <p className='font-semibold'>{WE?.company}</p>
                                    <p className='font-semibold text-gray-600'>{WE?.startYear} - {WE?.endYear}</p>
                                </div>
                                <ul className='list-disc pl-4'>
                                    {
                                        WE?.workDetails.map(WD =>
                                            <li className='font-thin' key={WD}>
                                                {WD}
                                            </li>)
                                    }
                                </ul>
                            </div>
                        )
                    }
                </section>
                {/* education */}
                <section>
                    <div className=' flex justify-between my-8'>
                        <h1 className='text-indigo-500 text-2xl font-semibold'>Education</h1>
                        <div className='w-3/4 border-indigo-500 border-t-4 mt-3'></div>
                    </div>

                    {education?.map(ED =>
                        <div className='flex justify-between items-center mt-3 mb-3'>
                            <h3 className='text-xl font-semibold'>{ED?.degree}</h3>
                            <p className='font-semibold text-gray-700'>{ED?.institute}</p>
                            <p className='font-semibold text-gray-600'>{ED?.startYear} - {ED?.endYear}</p>
                        </div>

                    )}
                </section>
                {/* skill */}
                <section>
                    <div className=' flex justify-between my-8'>
                        <h1 className='text-indigo-500 text-2xl font-semibold'>Skill</h1>
                        <div className='w-3/4 border-indigo-500 border-t-4 mt-3'></div>
                    </div>
                    <div className='font-semibold'>
                        {
                            skill?.map((singleSkill, index) =>
                                <span>
                                    <span>{singleSkill}</span>
                                    {index != [skill.length - 1] && <span > | </span>}
                                </span>

                            )
                        }
                    </div>
                </section>

            </main>

        </div>
    )
}

export default ResumeTemplate2

