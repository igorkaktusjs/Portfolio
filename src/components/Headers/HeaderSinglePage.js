import React, { useState, useContext }from "react"
import ProjectsContext from "../Data/ProjectsContext";

import styled from 'styled-components' 
import {RiCactusFill} from 'react-icons/ri'
import { Link } from "react-router-dom"

const HeaderSinglePage = () => {
    const [bar,setBar] = useState(false);

    const data = useContext(ProjectsContext);

    let projectItem = '';

    let link = '#';

     projectItem = data.map(item => (
        <span key={item.id}> <a href={link+item.slug}>{item.title}</a></span>
     ))

    return (
        <Conteiner bar={bar}> 
            <Logo >
                <span className="green"><RiCactusFill/></span>
                
                <Link to='/' className="link"><h1>Portfolio</h1></Link>
                </Logo>
                <Nav bar={bar}>
                    <span> <Link to='/'>Home</Link></span> 
                    {projectItem}
                </Nav>
                <div
                onClick={() => setBar(!bar)} 
                className="bars">
                    <div className="bar"> </div>
                </div>
        </Conteiner>
    )
}

export default HeaderSinglePage;

const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    @media(max-width: 763px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    .link{
        text-decoration: none;
        color: #fff;
    }

@media(max-width: 670px){
    .bars{
        width: 40px;
        height: 40px;
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        .bar{
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${props => props.bar ? 'transparent' : "#fff"};
            :before, :after{
                content: "";
                width: 100%;
                height: 2px;
                background-color: #fff;
                position: absolute;
            }
            :before{
                transform: ${props => props.bar ? 'rotate(45deg)' : 'translateY(10px)'};
                transition: all 400ms ease-in-out;
            }
            :after{
                transform: ${props => props.bar ? 'rotate(-45deg)' : 'translateY(-10px)'};
                transition: all 400ms ease-in-out;
            }
        }

    }
}
`

const Logo = styled.div`
display: flex;
align-items: center;
gap: 1rem;
span{
    font-size: 1.8rem;
}

h1{
    font-weight: 600;
    font-size: 1.2 rem;
}
`

const Nav = styled.div`
    

    @media(max-width:670px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color:#01be96;
        left:0;
        right: 0;
        top: 0;
        bottom:0;
        justify-content: center;
        align-items: center; 
        font-size: 2rem;
        gap: 2rem;
        fort-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 99;
    }
    span{
        margin-left: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
    @media(max-width:800px){
        span{
            margin-left: 0.3rem;
        }

    }
`