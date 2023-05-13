import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = (props) => {
    const { img_slider, disc_slider, title, slug}  = props.item;

    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
            <Conteiner className="project">
                <img src={img_slider} alt="project"/>
                <div className="desc">
                    <h1>{title}</h1>
                    <p>{disc_slider}
                    <Link 
                        to={slug}
                        onClick={scrollUp}
                        >
                        More...
                    </Link>
                    </p>
                </div>
            </Conteiner>
    )
}

export default Project;

const Conteiner = styled.div`
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
}
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;


.desc{
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.8rem;
    background: linear-gradient(rgba(25, 25, 35, 4), rgba(25, 25, 35, 0.7));
    transition: all 400ms ease-in-out;
    h1{
        font-size: 1rem;
    }
    
    p{
        width: 90%;
        font-size: 0.7rem;
        text-indent: 0.3rem;
        a{
            margin-left: 0.4rem;
            color: red;
        }
    }
}

:hover > img{
    transform: scale(1.3);
}

:hover > .desc{
    bottom: 0;
}
`