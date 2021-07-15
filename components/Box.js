import styled from 'styled-components'

export const MainGrid = styled.main`
.friends {
    height: 100%;
    padding: 20px;
}
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1210px;
    display: grid;
    grid-template-columns: 160px 1fr 312px;
  }
`

export const Box = styled.div`
background: #FFFFFF;
border-radius: 8px;
padding: 16px;
/* CSS Pré-Pronto */
margin-bottom: 10px;
.boxLink {
  font-size: 14px;
  color: #2E7BB4;
  text-decoration: none;
  font-weight: 800;
}

hr {
  margin-top: 12px;
  margin-bottom: 8px;
  border-color: transparent;
  border-bottom-color: #ECF2FA;
}
input {
  width: 100%;
  background-color: #F4F4F4;
  color: #333333;
  border: 0;
  padding: 14px 16px;
  margin-bottom: 14px;
  border-radius: 10000px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
}
button {
  border: 0;
  padding: 8px 12px;
  color: #FFFFFF;
  border-radius: 10000px;
  background-color: #6F92BB;
}
`
