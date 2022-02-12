import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from '../responsice'

const Container = styled.div`
  flex: 1;
  min-width: 400px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  position: relative;
  ${mobile({ margin: '0px', minWidth: "100%" })};
` 
const Circle = styled.div`
  /* width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ref;
  position: absolute;
  background-color: cyan; */

`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  transition: all .5s ease;


  &:hover {
    opacity: 1;
  }
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}
