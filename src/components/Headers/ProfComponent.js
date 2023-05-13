import React from "react";
import styled from "styled-components";

import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import { Slide } from "react-awesome-reveal";


const ProfComponent = () => {
    return (
        <Conteiner id="home">
            <Slide direction="left">
                <Texts>
                    <h4 >Hello<span className="green"> I'am</span></h4>
                    <h1 className="green">Ihor Toliupa</h1>
                    <h3>Junior Software Developer</h3>
                    <p> What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled
                    </p>
                        <button>Let's talk</button>
                        <Social>
                            <p>Check out my</p>
                            <div className="social-icons">
                            <span> <a href="https://linkedin.com/in/ihor-toliupa" target='_blank'> <FaLinkedin/></a></span>
                            <span> <a href="https://github.com/igorkaktusjs" target='_blank'> <BsGithub/></a></span>
                            </div>
                        </Social>
                </Texts>
            </Slide>
            <Slide direction="right">
            <Profile>
                <img src="http://kaktuscars.in.ua/wp-content/uploads/2023/04/—Pngtree—children-s-software-programming_5401261.png" alt="profile"/>
            </Profile>
            </Slide>
        </Conteiner>
    )
}

export default ProfComponent;

const Conteiner = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 3rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media(max-width: 840px){
        width: 90%;
    }

    @media(max-width: 640px){
        flex-direction: column;
    }

]
    
`

const Texts = styled.div`
    flex: 1;
h4{
    padding: 1rem 0;
    font-weight: 500;
}
h1{
    font-size: 2rem;
    font-family: 'Secular one', sans-serif;
    letter-spacing: 2px;
}
h3{
    font-wieght: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize; 
}
p{
    font-wieght: 300;
}
button{
    padding: 0.7rem 2rem;
    margin-top: 3rem;
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
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    aling- items: center;
    gap: 1rem;
    p {
        font-size: 0.9rem;
        @media (max-width: 690px){
            font-size: 0.7rem;
    }
}
    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            width: 2.3rem;
            height: 2rem;
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
            background-color: #3bb9f3fd;
            position: relative;
            transition: transform 400ms ease-in-out;
                :hover {
                    transform: rotate(360deg);
            }
            a{
                color: #fff;
                position: absolute;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`

const Profile = styled.div`
img{
    width: 25rem;
    filter: drop-shadow(0px 3px 3px #3bb9f3fd);
    transition: transform 400ms ease-in-out;
    @media(max-width: 790px){
        width: 20rem;
    }

    @media(max-width: 660px){
        width: 18rem;
    }

    @media(max-width: 640px){
        width: 18rem;
    }
}
:hover img{
    transform: translateY(-10px);
}

`