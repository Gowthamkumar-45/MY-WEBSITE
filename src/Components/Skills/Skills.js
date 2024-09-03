import React from 'react'
import { Element } from 'react-scroll'
import SkillImg from "../../images/light.jpeg"
import LinearProgress from "@mui/material/LinearProgress"
import "./Skills.css";

function Skills() {
   return (
      <Element className="SkillContainer" id="skills">
         <div className="SkillContainer__image">
            <img src={SkillImg} alt='' />
         </div>
         <div className='SkillContainer__text'>
            <h2> SKILL SET </h2>
            <div className='SkillContainer__SkillSet'>
               <h5>REACT</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider1'>
                  <LinearProgress variant='determinate' value={50} />
               </div>
            </div>
            <div className='SkillContainer__SkillSet'>
               <h5>HTML</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider2'>
                  <LinearProgress variant='determinate' value={90} />
               </div>
            </div>
            <div className='SkillContainer__SkillSet'>
               <h5>CSS</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider3'>
                  <LinearProgress variant='determinate' value={70} />
               </div>
            </div>
            <div className='SkillContainer__SkillSet'>
               <h5>JAVASCRIPT</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider4'>
                  <LinearProgress variant='determinate' value={40} />
               </div>
            </div>
            <div className='SkillContainer__SkillSet'>
               <h5>C Programming</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider5'>
                  <LinearProgress variant='determinate' value={80} />
               </div>
            </div>
            <div className='SkillContainer__SkillSet'>
               <h5>SQL</h5>
               <div className='SkillContainer__Slider SkillContainer__Slider6'>
                  <LinearProgress variant='determinate' value={40} />
               </div>
            </div>
         </div>
      </Element>
   )
}

export default Skills
