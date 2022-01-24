import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  column-gap: 3px;
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
