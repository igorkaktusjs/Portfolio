import React from 'react'
import { Link } from "react-router-dom"


import { MdOutlineDeliveryDining } from 'react-icons/md'
import styled from 'styled-components' 

const HeaderDelivery = () => {

    return (
        <Conteiner>
                <Logo >
                    <span className="green-delivery"><MdOutlineDeliveryDining /></span>

                <Link to='/' className="link" ><h1>Delivery App</h1></Link>
            
                </Logo>
            <Nav>
                <span><a href='#'>Stock Management</a></span>
                <span><a href='#'>Order History</a></span>
                <span><a href='#'>Reports</a></span>
                <span><a href='/'>Home</a></span>
            </Nav>
        </Conteiner>    
    )
}

export default HeaderDelivery;

const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width 1280px;
    margin: 0 auto;
    background: linear-gradient(159deg, rgb(45, 45, 58), 0%, rgb(43, 43, 53) 100%);
    height: 10vh;
    padding: 1.5rem 0;
    @media(max-width: 763px){
        width: 90%;
    }
`;
const Nav = styled.div`
    span{
        margin-left: 1rem;
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
        }
    } 
    
    
`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 1.3rem;
    span{
        font-size: 2.4rem;
        margin-left: 1.4rem;
    }

h1{
    font-weight: 600;
    font-size: 1.2rem;
}

.link{
    text-decoration: none;
    color: #fff;
`
