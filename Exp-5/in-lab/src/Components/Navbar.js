import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ProductsList } from './ProductsList';
function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{color:'white'}}>
        <Container>
          <Navbar.Brand href="#home">ProductsList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ProductsList />
      </>
  )}
export default Navigationbar;