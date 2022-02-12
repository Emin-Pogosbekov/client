import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsice'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  column-gap: 3px;
  ${mobile({ padding: '0px', flexDirection: 'column' })};
`

export default function Categories() {
  return (
    <Container>
      {
        categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))
      }
    </Container>
  )
}
