import {
  Container,
  Row,
  Col,
  // Navbar,
  // Form,
  // InputGroup,
  // Button,
} from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import PostCard from "./PostCard";
import "./komunitas.css";
import heroimg from "./assets/mentawai-islands.jpg";

const Komunitas = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar bg="dark" variant="dark" className="px-3 mb-4">
        <Navbar.Brand href="#home">TAJAMENTAWAI</Navbar.Brand>
        <Form className="d-flex ms-auto me-3">
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Cari di Komunitas"
              aria-label="Search"
            />
            <Button variant="outline-light">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Form>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-circle"
        />
      </Navbar> */}

      <Container>
        <Row>
          <img src={heroimg} alt="" className="img-fluid heroimg" />
          <Col md={4}>
            <ProfileCard />
          </Col>
          <Col md={8}>
            <PostCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Komunitas;
