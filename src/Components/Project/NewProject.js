
import React, { useState } from 'react';
import "./NewProject.css";

function NewProject({img, title, desc, link }) {
  const [Show, SetShow] = useState(false);
  return (
    <div className='Projects'>
      <a href={link}>
        <div  onMouseEnter={() => SetShow(true)} onMouseLeave={() => SetShow(false)}>
          {Show ? (
            <div className="project__content">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ) : (
            <img src={img} alt="not loading" />
          )}
        </div>
      </a>
    </div>
  );
}
export default NewProject
