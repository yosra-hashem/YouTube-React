import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container=styled.div`
  display:flex;
  margin: 0px;
  padding: 0px;
`;
const Main=styled.div`
  flex:7;
`;
const Wrapper=styled.div`
  margin: 0px;
  padding: 0px;
`;

function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
          Test
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
