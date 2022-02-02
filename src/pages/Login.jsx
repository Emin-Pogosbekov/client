import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(
      rgba(255, 255, 255, .5),
      rgba(182, 174, 174, 0.5)
    ), 
    url('https://images.unsplash.com/photo-1550402537-6f7b6189b3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80') center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  opacity: .9;

`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 20px;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
`
const Links = styled.div`
  display: flex;
  column-gap: 10px;
`

const Link = styled.a`
  font-size: 14px;
`

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>Login</Button>
          <Links>
            <Link>Forgot your password?</Link>
            <Link>Create a new account</Link>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  )
}
