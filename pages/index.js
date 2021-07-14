import styled from 'styled-components'
import React from 'react';

const Box = styled.div`
  color: white;
  borde-radius: 8px;
  width: 618px;
  height: 178px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 20px;
  color: black;
`
const Title = styled.h1`
  font-family: Rubik,
  font-weight: 400;
  font-size: 28px;
  line-height: 33,18px;
`

export default function Home() {
  return (
   <main>
   <Box>
     <Title>Bem-vindo(a),</Title>
   </Box>
   <Box>
   Bem vindo
   </Box>
   <Box>
    Comunidade
   </Box>
   </main>
  )
}
