import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";




const ClientSlider = (props) => {

    const {name, position, img_url, stars, disc} = props.item;

    return (
        <Conteiner> 
            <Header>
                <span className='quete'><IoIosQuote/></span>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                           <AiOutlineStar/>
                    </span>
                ))}
                
            </Header>
            <Body>
                {disc}
            </Body>
            <Footer>
                <img src={img_url} alt={name}/>
                <div className='details'>
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
            </Footer>
        </Conteiner>
    )
}

export default ClientSlider;

const Conteiner = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;

    
`

const Header = styled.div`

    .quete{
        font-size: 3rem;
        color: #3bb9f3fd;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;

    }
`

const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`

const Footer = styled.div`
display: flex;
align-items: center;
gap: 1rem;

    img{
        width: 4rem;
        border-radius: 50px;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px) {
            font-size; 1rem;    
        }
        @media(max-width: 538px) {
            font-size; 0.9rem;    
        }
    }

    p[
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.500);
        @media(max-width: 538px) {
            font-size; 0.8rem;
        }
    ]
    `



