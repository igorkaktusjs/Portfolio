import React from "react";

import styled from 'styled-components' 

const Button = ({label,link}) => {

    return (
        <Conteiner>
            <button>
                <a target="_blank" href={link}>{label}</a>
            </button>
        </Conteiner>
    )
}

export default Button;

const Conteiner = styled.div `
    button{
        margin-top: 1rem;
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
        a{
            color: #fff;
            font-weight: 500;
            padding: 0.7rem 1rem;
        }
    }
      
`;