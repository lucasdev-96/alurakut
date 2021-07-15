import styled from 'styled-components'
import React from 'react';
import { MainGrid , Box } from '../components/Box'
import Perfil from '../components/Perfil/Perfil';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../libs/AluraKutMenu'
import {ProfileRelationsBoxWrapper} from '../libs/ProfileRelanshions'

const Title = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 33,18px;
`

export default function Home() {
  const gitHubUser = 'lucasdev-96'
  const friends = [
  'mluiza-vcr', 
  'mvrdgs', 
  'jacksonpires', 
  'MuriloGon', 
  'LucasMLara', 
  'PollyanaOliveira', 
  'gfpoliva',
  'icaroharry',
  'LucasH-Paz'
]
console.log(friends)
  return (
    <>
  <AlurakutMenu />
   <MainGrid>
   <Box className="profileArea">
     <Perfil gitHubUser={gitHubUser}/>
   </Box>
   <div>
   <Box className="welcome">
   <Title>Bem-vindo(a) Lucas Godoi</Title>
   <OrkutNostalgicIconSet />
   </Box>
   <Box className="search">
     Eu desejo
   </Box>
   </div>
   <div>
   <ProfileRelationsBoxWrapper className="friends">
    Meus Amigos <span style={{color: '#2E7BB4'}}>({friends.length})</span>
    <ul>
    {friends.map((person) => {
      return (
      <li key={person}>
      <a href={`/users/${person}`}>
      <img src={`https:/github.com/${person}.png`} />
      <span>{person}</span>
      </a>
      </li>
      )
    })}

    </ul>
   </ProfileRelationsBoxWrapper>
   <Box className="comunity">
     sadadsadsa
   </Box>
   </div>
   </MainGrid>
   </>
  )
}
