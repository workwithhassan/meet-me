import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { Container, Form } from 'react-bootstrap';

function Signup() {
  return (
    <>
    <section className="signup">
        <Container>
            <div className="row">
    <div className="left col-lg-8 col-md-8 col-sm-0"></div>
    <Form className="right col-lg-4 col-md-4 col-sm-12">
    <h2>Sign in</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      {/* <img src={nameIcon} alt="" /> */}
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <p>Don't have an account? <a>Register here</a></p>
  <button variant="primary" type="submit" className="btn primary-btn">
    LOG IN
  </button>
</Form>
</div>
  </Container>
</section>
    </>
  )
}
export default Signup;