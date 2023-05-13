import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
    <Conteiner id="footer">
        <Profile>
            <h1>Portfolio</h1>
            <div className="address">
                <h1>Address</h1>
                <p>Woking, Surrey, England, United Kingdom</p>
                </div>
                <div className="links">
                    <h1> Contact me directly:</h1>
                    <div>
                        <span><FiPhoneCall/></span>
                        <a href="tel: +44749309861">+44 7493 09861</a>
                    </div>
                    <div>
                        <span><FiMail/></span>
                        <a href="malito:igortoliupa@gmail.com">igortoliupa@gmail.com</a>
                    </div> 
                    <div>
                        <span><FaWhatsapp/></span>
                        <a href="https://wa.me/+380950178625" target='_blank'>WhatsApp</a>
                    </div>  
                </div>
                {/* <div className="profiles">
                    <h1>Check my profiles</h1>
                    <div className="icons">
                        <span><a href="https://github.com/igorkaktusjs" target='_blank'><AiFillGithub/></a></span>
                        <span><a href="https://linkedin.com/in/ihor-toliupa" target='_blank'><AiFillLinkedin/></a></span>
                        <span><a href="https://linkedin.com/in/ihor-toliupa" target='_blank'><FaWhatsapp/></a></span>
                    </div>
                </div> */}
                {/* <ArrowUp onClick={scrollUp}>
                    <AiOutlineArrowUp/>
                </ArrowUp> */}
        </Profile>
        <Form>
        <div className="profiles">
                    <h1>Check my profiles</h1>
                    <div className="icons">
                        <span><a href="https://github.com/igorkaktusjs" target='_blank'><AiFillGithub/></a></span>
                        <span><a href="https://linkedin.com/in/ihor-toliupa" target='_blank'><AiFillLinkedin/></a></span>
                    </div>
                </div>
                
        {/* <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form> */}
        </Form>
        <ArrowUp onClick={scrollUp}>
          <AiOutlineArrowUp/>
        </ArrowUp>
    </Conteiner>
    )
}

export default Footer;

const Conteiner = styled.div`
        margin-top: 2rem;
        position: relative;
        padding: 2rem 0;
        width: 80%;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

    @media(max-width: 840px) {
        width: 90%;
    }
    @media(max-width: 650px) {
        flex-direction: column;
        gap: 3rem;

    }
`;

const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }
    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }
  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: #3bb9f3fd;
        }
      }
    }
  }
  .profiles{
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    .icons {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3bb9f3fd;
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: #000;
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
`;

const ArrowUp = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #3bb9f3fd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 2rem;
    align-self: self-end;
    border-radius: 50%;
    @media(max-width: 650px){
        position: absolute;
        right: 3rem;
        top: 16rem;
    }
`

const Form = styled.div`

.profiles{
  h1 {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
  .icons {
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3bb9f3fd;
      width: 3rem;
      height: 3rem;
      margin-right: 2rem;
      border-radius: 50px;
      :hover {
        background-color: #000;
      }
      a {
        margin-top: 0.2rem;
        color: #fff;
      }
    }
  }
}




    flex: 1;
    h1 {
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }
    
    form {
        background-color: #191923;
        padding: 0.8rem;
        border-radius: 5px;
        .name,
        .email,
        .message {
          display: flex;
          border: 1px solid gray;
          margin-bottom: 0.5rem;
          input,
          textarea {
            width: 100%;
            border: none;
            outline: none;
            color: #fff;
            background-color: transparent;
            padding: 1rem 0.5rem;
          }

         } 
        span{
            background-color: #3e3e3e;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
       }
        .messageIcon{
            aling-items: flex-start;
            padding-top: 0.5rem;
        }
        button {
            width: 5rem;
            height: 1.8rem;
            background-color: #3bb9f3fd;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #01be9551);
            cursor: pointer;
            :hover {
              filter: drop-shadow(0px 6px 9px #01be9551);
            }
    }
    
`;
