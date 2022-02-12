import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(
      rgba(255, 255, 255, .5),
      rgba(182, 174, 174, 0.5)
    ), 
    url('https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80') center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  opacity: .9;
  ${mobile({ width: '75%' })};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
`

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='user name' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consert to the processing of my personal data in accordance with the Privacy Policy
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
