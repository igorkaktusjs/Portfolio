import React, { useRef, useContext } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import ClientsContext  from '../Data/ClientsContext'
    
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {

    const data = useContext(ClientsContext);
    let client = '';
    client = data.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))

    const arrowRef = useRef(null);

    return (
        <Conteiner id='client'>
            <span className='green'>testimonials</span>
            <h1>what clients say</h1>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {client}
                    </Slider>
                    <Buttons>
                        <button
                        onClick={()=> arrowRef.current.slickPrev()}
                        ><IoIosArrowBack/></button>
                        <button
                        onClick={()=> arrowRef.current.slickNext()}
                        ><IoIosArrowForward/></button>
                    </Buttons>
            </Testimonials>
        </Conteiner>
    )
}

export default Clients;

const  Conteiner = styled.div `
    width: 80%;
    max-width: 1280%;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width: 840px) {
        width: 90%;
         
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }
    .slick-dots li button:before{
        content: "";
    }
    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(43, 43, 53) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }

    .slick-dots li.slick-active button{
        background: #3bb9f3fd;
        width: 15px;
    }
    
    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative
`

const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #3bb9f3fd;
        cursor: pointer;
        font-size: 1.1rem;

    }

    @media(max-width: 530px){
        display: none;
   }
`
