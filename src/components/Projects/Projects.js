import React from "react";
import styled from "styled-components";
import SliderComp from './SliderComp'
import { Link } from "react-router-dom";

const Projects = () => { 
    
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <Conteiner id="project">
            <Link 
                to={'projects_page'}
                className="link"
                onClick={scrollUp}> 
                <h1>Recent <span className="green">Projects</span></h1>
            </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            <Slide>
                <SliderComp/>
            </Slide>
        </Conteiner>
    )
}

export default Projects;

const Conteiner = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    @media(max-width: 840px){
        width: 90%;
    }

.link{
        text-decoration: none;
    }
h1{
    font-size: 1.9rem;
    color: #fff;
}

p{
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media(max-width: 500px) {
            width: 90%;
    }

    
}
`

const Slide = styled.div``