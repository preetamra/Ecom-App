import "../Component/NavBar.css";
import {Navbar,Container} from "react-bootstrap"


function NavBar() {
    return(
        <Navbar style={{backgroundColor:"gray"}}>
        <Container>
          <Navbar.Brand href="/home">E-Com App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            
              <div className="navitem">
                  <p>Account</p>
                  <p>Account</p>
                  <p>Account</p>
                  <p>Account</p>
              </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar