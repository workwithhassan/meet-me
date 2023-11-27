import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'
import nameIcon from '../../assets/name-icon.png'
import signupBg from '../../assets/signup-bg.png'
import { Container, Form } from 'react-bootstrap';

function Signup() {
  return (
    <>
    <section className="signup">
        <Container>
            <div className="row">
    <div className="left col-lg"></div>
    <Form className="right col-4">
    <h2>Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      {/* <img src={nameIcon} alt="" /> */}
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Repeat Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I read and agree to Terms & Conditions" />
  </Form.Group>
  <button variant="primary" type="submit" className="btn primary-btn">
    CREATE ACCOUNT
  </button>
</Form>
</div>
  </Container>
</section>
    </>
  )
}
export default Signup;