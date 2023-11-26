import React, { useEffect, useState } from 'react';
import '../styles/Work.css'

interface WorkExperience {
  id: string;
  companyName: string;
  description: string[];
  endDate: Date;
  startDate: Date;
  position: string;
  location: string;
}

function Work() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:8080/v1/workexperience')
      .then(response => response.json())
      .then(data => setWorkExperiences(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className='work'>
      <h2>Work Experience</h2>
      {workExperiences.map(experience => (
        <div>
          <div key={experience.id}>
            <p>{experience.position}</p>
            <p>{experience.companyName}</p>
          <ul>
            {experience.description.map((desc) => (
              <li>{desc}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </main>
  )
}

export default Work;