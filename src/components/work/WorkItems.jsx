import React from "react";
import './work.css'

const WorkItems = ({ item }) => {

  const goToProject = (link) => {
    window.open(link, '_blank');
    console.log(link)
  };
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <span className="work__tag-div">{item.tech.map((x,i)=><span className="work__tag" key={i}>{x}</span>)}</span>
      <h2 className="work__title">{item.title}</h2>
      <p className="work__description">{item.description}</p>
      {/* <a onClick={()=>{goToProject(item.link)}} className="work__button">
        <link to={item.link} />
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a> */}
       <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button" onClick={()=>{ window.open(item.link, '_blank');}}>
        {item.id <=10 ? "Demo" : 'Coming soon'} <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
