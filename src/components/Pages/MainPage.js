import styled from 'styled-components' 

import Header from '../Headers/Header';
import ProfComponent from '../Headers/ProfComponent';
import Services from '../Service/Services';
import Projects from '../Projects/Projects';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import { Fade } from 'react-awesome-reveal'


const MainPage = () => {

    return (
        <Conteiner>
        <Banner>
          <Fade>
            <Header/>
              <ProfComponent/>
          </Fade>
        </Banner>
          <Services/>
        <LightColor>
          <Projects/>
        </LightColor>
          <Clients/>
        <LightColor>
          <Footer/>
        </LightColor>
      </Conteiner>
    )
}
    
export default MainPage;

const Conteiner = styled.div``;
const Banner = styled.div` 
  background: linear-gradient(159deg, rgb(45, 45, 58), 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media(max-width: 640px){
    height: 100%;
    padding-botton: 1rem;
}
`

const Project = styled.div``

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

