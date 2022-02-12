import { Facebook, Instagram, Twitter, Pinterest, MailOutline, Room, Phone } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsice'


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })};
  
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h2``
const Desc = styled.p`
  margin: 20px 0;
  width: 50%; 
`
const SocialContainer = styled.div`
  display: flex;
  column-gap: 6px;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })};
`
const Title = styled.h3`
  margin-bottom: 30px;

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`

const ListItem = styled.li`
  width: 50%;

`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`
const Payment = styled.img`
  width: 50%;
`

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Shopify</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, praesentium ipsam! Aspernatur, praesentium eum amet quia magnam ipsam quaerat, molestiae, ad pariatur voluptatibus quibusdam autem repellendus ipsum veniam illo iste!</Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='e60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room />
          622 Dixie Path, South Tobinchester 29111
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 234 55 55
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@mail.com
        </ContactItem>
        <Payment src='https://www.digital-web-services.com/wp-content/uploads/Paypal-all-credit-cards-2048x734.png' />
      </Right>
    </Container>
  )
}
