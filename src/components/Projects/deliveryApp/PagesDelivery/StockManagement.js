import React, { useContext} from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import ProductsContext from '../dataDelivery/ProductsContext'

import styled from 'styled-components' 

const StockManagement = (props) => {

    const data = useContext(ProductsContext);

    let products = '';

    products = data.map(item => (
        <tr key={item.id}>
            <th scope="row">{item.name}</th>
            <td>{item.type}</td>
            <td className='tags'>{item.tags.map((tag,i) => (<p key={tag[i]}>{tag}</p>))}</td>
            <td><button 
                className={item.online ? 'green' : 'red'}>
                {item.online ? 'on' : 'Off'}
                </button></td>
            <td><button
                className={item.delivery ? 'green' : 'red'}>
                {item.delivery ? 'on' : 'Off'}
                </button></td>
        </tr>
    ));

    console.log(props.input);
    return (
        <Conteiner>
            <div className='title-stock'>
            <table>
                    <caption>Check product availability and make changes</caption>
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Online<p> 
                            <button className={true ? 'green' : 'red'}>All On
                            </button> 
                            </p>
                            </th>
                        <th scope="col">Delivery<p> 
                            <button className={false ? 'green' : 'red'}>All Off
                            </button> 
                            </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                    <tfoot>
                            <tr>
                            <td colSpan="3"><BsFillArrowLeftSquareFill/></td>
                            <td colSpan="0"><BsFillArrowRightSquareFill/></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
        </Conteiner>
    )
}

export default StockManagement;

const Conteiner = styled.div `

    .title-stock{
        background: rgb(244, 242, 245, 0.9);
        margin: 1rem;
    }
    caption{
        color: #000000;
        font-size: 1.3rem;
        padding: 1rem
    }

    table {
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
    }

    thead th:nth-child(1) {
        width: 30%;
      }
      
      thead th:nth-child(2) {
        width: 10%;
      }
      
      thead th:nth-child(3) {
        width: 30%;
      }
      
      thead th:nth-child(4) {
        width: 15%;
      }

      thead th:nth-child(5) {
        width: 15%;
      }
      
      th, td {
        padding: 1.3rem;
        text-align: center;
        color: #000000;
        border-bottom: 1px solid gray;
      }

      thead, tfoot {
        color: #000000;
        text-shadow: 1px 1px 1px black;
      }

      tbody tr:nth-child(odd) {
        background-color: rgba(242, 241, 241);
      }
      
      tbody tr:nth-child(even) {
        background-color: rgba(224, 220, 220, 0.3);
      }

      button{
          padding: 0.5rem 2rem;
          border: none;
          cursor: pointer;
          color: #fff;
      }

      p button{
          margin-top: 1rem;
      }

      .red{
        background-color: red;
      }

      .green{
        background-color: green;
      }
      
      

      
`;