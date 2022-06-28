import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import "./dist/output.css";
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

const fetchData = async () => {
	try
	{
		const projectResponse = await axios.get(process.env.REACT_APP_API_URL);
		setProjects(projectResponse.data[0]);
		setSkills(projectResponse.data[1]);
		setAchievements(projectResponse.data[2]);
	}
	catch (error)
	{
			console.log(error);
	}
}

//Get projects data
useEffect(() => {
fetchData();
}, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects projects={projects}/>
      <Skills skills={skills}/>
      <Achievements achievements={achievements}/>
      <Contact />
    </main>
  );
}

export default App;


/*
      <Projects projects={projects}/>
      <Skills skills={skills}/>
      <Achievements achievements={achievements}/>

*/