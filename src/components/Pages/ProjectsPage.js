import styled from 'styled-components' 

import Description from './Description';
import HeaderSinglePage from '../Headers/HeaderSinglePage';
import Footer from '../Footer/Footer';
import { Fade } from 'react-awesome-reveal'


const ProjectsPage = () => {

    return (
    <Conteiner>
        <Banner>
            <Fade>
            <HeaderSinglePage/>
            </Fade>
        </Banner>
            <Description/>
        <LightColor>
        <Footer/>
      </LightColor>
    </Conteiner>
    )
}

export default ProjectsPage;

const Conteiner = styled.div`
  max-width: 1280px;
  margin: 0 auto;

    h2{
    color: red;
    }
`;

const Banner = styled.div` 
 height: 12vh;
 background: linear-gradient(159deg, rgb(45, 45, 58), 0%, rgb(43, 43, 53) 100%);

 @media(max-width: 640px){
  height: 100%;
  padding-botton: 1rem;

}
`
const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;