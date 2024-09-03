import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import "./ExpContainer.css";

const ExpContainers = () => {
  return (
    <Element className="ExpContainer" id="experience">
        <h1>Experience</h1>
        <div className='experience__info'>
        <ExperienceBox number="5+" title="Projects" />
        <ExperienceBox number="5+" title="Month Experience"  style={{backgroundColor:"#f64c08"}}/>
        <ExperienceBox number="0+" title="Clients" />
        </div>
    </Element>
  )
}

export default ExpContainers
