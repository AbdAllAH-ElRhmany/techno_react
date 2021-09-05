import styled from 'styled-components';
import {device} from '../media';
export const HomeSection =styled.section `
    background: url('images/homepaged.png');
    height: 120vh;
    background-repeat: no-repeat;
    background-position: right center; 
    background-size: cover; 
    position: relative;
`;
export const Home_Content = styled.div`
    position: absolute;
    top: 50% ;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    @media ${device.Sm} {
      left: 50%;
      top: 55%;
      width: 90%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      text-align: center;
    }
  `;
  export const Home_Title = styled.h2`
    font-size: 65px;
    @media ${device.Sm} {
      color: #fff;
      font-size: 30px;
    }
    `;
  export const Home_Desc = styled.p`
    max-width: 55%;

    @media ${device.Sm}{
      font-size: 16px;
      color: #fff;
      margin: auto;
      max-width: 85%;
    }
    `
  export const HomeBtn = styled.button`
    padding: 15px 40px;
    margin-right: 10px;
    max-width: 180px;
    &:last-of-type{
      @media ${device.Sm}{
        display: none;
      }
      
    }
    @media ${device.Sm}{
      display: block;
      max-width: 180px;
      margin: auto;
      margin-bottom: 10px;
    }
  `;
  