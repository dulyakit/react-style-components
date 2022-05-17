import styled, { css } from 'styled-components'

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.size};
  padding: ${props => props.size};
`

const Input2 = styled.input`
  border: none;
  background-color: papayawhip;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  color: ${(props) => props.inputColor || 'green'};
`

const Container = styled.div`
  text-align: center
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
)

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold
`
const Home = () => {
  return (
    <Container>
      <Input placeholder='Small text input' />
      <Input placeholder='Big text input' size="5em" />

      <Button>Normal Button</Button>
      <Button as="a" href="#">Link with Button styles</Button>
      <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>

      <Link>
        Link Hello
      </Link>
      <StyledLink>
        Link StyledLink
      </StyledLink>

      <br />

      <Input2 defaultValue="Input2" />
      <Input2 defaultValue="Input2" inputColor="red" />
    </Container>
  );
}

export default Home 
