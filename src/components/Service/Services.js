import React from "react";
import { icons } from "react-icons";
import styled from "styled-components";
import Card from "./Card";
import {AiFillAppstore} from "react-icons/ai";
import {AiFillBulb} from 'react-icons/ai'
import {AiFillAlipaySquare} from 'react-icons/ai'
import { Slide } from "react-awesome-reveal";
import { FaCss3Alt } from 'react-icons/fa'
import {FaWordpress} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'

const Services = (props) => {

    return (
        <Conteiner id="service">
                <Slide direction="down">
                    <h4>My <span className="green">services</span></h4>
                    <h1>What I Do</h1>
                </Slide>
            <Cards>
                <Slide direction="right">
                    <Card
                    Icon={FaCss3Alt}
                    title={'HTML5 | CSS3'}
                    desc={'Creation of pages, forms, animations adhering to W3 standards and using additional Bootstrap frameworks'}
                        />
                </Slide>
                <Slide direction="right">
                    <Card
                    Icon={FaWordpress}
                    title={'Php | Wordpress'}
                    desc={'Development of sites with CMS Wordpress and custom plugins for CMS. Installation, customization, updating templates. Working with the server, backups, installing SSL certificates'}
                        />
                </Slide>
                <Slide direction="right">
                    <Card
                    Icon={FaReact}
                    title={'JS | React | Redux'}
                    desc={'Сreating web applications, custom hooks according to ECMAScript standards using the latest versions of the React library with Redux'}
                        />
                </Slide>
            </Cards>
        </Conteiner>
        
    )
}

export default Services; 

const Conteiner = styled.div `
    margin: 0 auto ;
    width: 80%;
    max-width: 1280px;
    padding: 3rem 0;
    @(max-width: 840px){
        width: 90%;
    }

    h1{
        padding-top: 1rem;
    }

    h4{
        text-align: left;

    }
`;

const Cards = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`


