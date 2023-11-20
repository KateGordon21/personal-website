import './App.css'
import { useEffect, useState } from 'react';

interface JobData {
  id: string;
  companyName: string;
  description: string[];
  endDate: Date;
  startDate: Date;
  position: string;
  location: string;
}

function App() {
  const [workExperiences, setWorkExperiences] = useState<JobData[]>([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:8080/v1/workexperience')
      .then(response => response.json())
      .then(data => setWorkExperiences(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Front-end</h1>
      <h2>Work Experience</h2>
      {workExperiences.map(experience => (
        <div>
        <div key={experience.id}>
          <p>{experience.position}</p>
          <p>{experience.companyName}</p>
        </div>
        <ul>
        {experience.description.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
      </div>
      ))}
    </>
  )
}

export default App;