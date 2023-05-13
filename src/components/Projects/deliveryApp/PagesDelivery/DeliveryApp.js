import React, { useState } from 'react'
import HeaderDelivery from '../HeaderDelivery/HeaderDelivery'
import SearchProducts from '../HeaderDelivery/SearchProducts'
import StockManagement from './StockManagement'
import Search from '../HeaderDelivery/Search'

import productsDelivery from '../dataDelivery/productsDelivery'
import ProjectsContext from '../../../Data/ProjectsContext'

import styled from 'styled-components' 

const DeliveryApp = () => {

    const [input, SetInput] = useState('');

    return (
        <ProjectsContext.Provider value={productsDelivery}>
            <Conteiner>
                <HeaderDelivery/>
                <Search/>
                <StockManagement
                input={input}
                SetInput={SetInput}
                />
            </Conteiner>
        </ProjectsContext.Provider>

    )
}

export default DeliveryApp;

const Conteiner = styled.div`
    background: rgb(199, 199, 199); 
`;