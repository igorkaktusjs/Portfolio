import React from "react";

import styled from 'styled-components' 

const Icons = ({icon_link, icon, style}) => {


    if (icon_link.length < 1) { 
        return;
      }    

    return (
        <Conteiner>
            <span style={style} className='icon'><a href={icon_link} target='_blank'>{icon}</a></span>
        </Conteiner>
    )
    
}

export default Icons;

const Conteiner = styled.div `
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
`;