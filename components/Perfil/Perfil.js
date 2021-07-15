import React from 'react';
import Infos from './index';
import perfil from '../../imgs/perfil.svg';
import styled from 'styled-components';

const Span = styled.span`
   display: grid;  
 
`;


export default function Perfil({gitHubUser}) {
const src = `https:/github.com/${gitHubUser}.png`
    return (
        <>
  <div className="img" >
  <img
    src={src}
    alt="user"
    />
    </div>
    <hr/>
    <Infos style={{width: '85px'}}>
    <h1 className="name">Lucas Godoi</h1>
    <div className="p">
        masculino, solteiro(a) Brasil
    </div>
    </Infos>
    <hr/>
    <Span className="father">
        <img src={perfil} />
        <a>Perfil</a>
        <a>editar</a>
    </Span>

    </>
    )
}