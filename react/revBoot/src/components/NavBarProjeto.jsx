import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Henzo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Novidades</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
            <NavDropdown title="Saiba Mais" id="basic-nav-dropdown">
x               <NavDropdown.Item href="#action/3.2">
                Midia Social
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Produtos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contato
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarProjeto;