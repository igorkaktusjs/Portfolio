import React, {useContext} from "react";
import Button from "../UI/Button";
import Icons from "../UI/Icons";
import { AiFillGithub } from "react-icons/ai";  
import ProjectsContext from "../Data/ProjectsContext";

import styled from 'styled-components'

const Description = () => {

    const data = useContext(ProjectsContext);
    let projectItem = '';

    projectItem = data.map(item => (

        <div className="description_item" key={item.id} id={item.slug}>
                <h3 className="description_title">{item.title}</h3>
            <div className="description">
                <p className="description_text"> 
                    {item.disc}
                </p>    
                <img src={item.img_project}/>
            </div>
            <div className="profiles">
                    <Button 
                        label={item.button_label}
                        link={item.button_link}
                    />
                    <Icons
                        icon_link={item.github_link}
                        icon={<AiFillGithub/>}
                    />
                </div>
            </div>

    ))

    return (
        <Conteiner>
            {projectItem}
        </Conteiner>
    )
}
    

    

export default Description;

const Conteiner = styled.div `
margin: 2rem 2rem;

p{
    text-indent: 3ch;
    text-align: left;
}

.description_item{
    margin: 0 auto;
    width: 80%;
}

.description_title{
    font-size: 2rem;
    padding: 1rem 1rem;
    text-align: center;
}

.description{
    display: flex;
    gap: 3rem;
    margin: 2rem 2rem;
}

img{
    width: 40%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
}

:hover > img{
    transform: scale(1.3);
}

button{
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    margin-left: 2rem;
    cursor: pointer;
    background-color: #3bb9f3fd;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 3px 3px #3bb9f3fd);
    :hover{
        filter: drop-shadow(0px 5px 5px #3bb9f3fd);
    }
}

.profiles{
    display: flex;
    justify-content: start;
    align-items: end;
    padding-right: 1rem;
    .icons {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3bb9f3fd;
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 0.5rem;
        filter: drop-shadow(0px 3px 3px #3bb9f3fd);
        :hover {
            filter: drop-shadow(0px 5px 5px #3bb9f3fd);
        }
        a {
          width: 1rem;
          height: 1rem;
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }

  @media(max-width: 386px){
    .profiles {
            margin-bottom: 1rem;

        {
    display: none;
    }
  @media(max-width: 428px){
    .description{
        flex-direction: column;
        align-items: center;
    }


    .description_title{
        font-size: 1.5rem;
    }

    .description_item{
        width: 90%;
    }
    .description img{
        width: 100%;
  }}

  @media(max-width: 640px){
    .description{
        flex-direction: column;
        align-items: center;
    }
    
    img{
        width: 80%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
  }

    .profiles{
        justify-content: center;
    }
  

`;