import React from 'react';
import { Element } from "react-scroll";
import TopContent from '../TopContent/TopContent';
import "./TopContainer.css";



function TopContainer() {
    return (
        <Element name="about" className="topContainer">
            <TopContent />      
        </Element>
    );
}

export default TopContainer
