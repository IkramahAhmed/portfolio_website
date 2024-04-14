import React, { useEffect, useState } from "react";
import { projectData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import "./work.css";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(()=>{
    if(item.name === 'all'){
      setProject(projectData)
    }
    else{
      const newProject= projectData.filter((project)=>{
        return project.category === item.name;
      })
      setProject(newProject);
    }
  },[item])

  // useEffect(()=>{
  //   console.log(project)
  // },[project])


  const handleClick = (e,index,itemName) =>{
    setItem({name:itemName});
    setActive(index)
    console.log(item.name)
  }

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span className={ active === index ? 'work__item active__work' : 'work__item'}
             key={index} onClick={(e)=>{handleClick(e,index,item.name)}}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {project.map((item) => {
          return <WorkItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Works;
