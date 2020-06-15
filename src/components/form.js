import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn ,Container} from "mdbreact";
import Axios from 'axios'
class FormComponent extends React.Component {
  state = {
   email:"",
   password:"",
   ConfrimPassword:"",
  };

  submitHandler = event => {
    event.preventDefault();
    const {password, ConfrimPassword,confirmed}=this.state;
    if(password===ConfrimPassword){
        event.target.className += " was-validated"
        Axios.post('https://burger-app-1faea.firebaseio.com/test.json', {
            email:this.state.email,
            password:this.state.password,
        }
    )
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log("not send");
    });

    }else{
        console.log("not matched")
    }

  };
 
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
            <h3 style={{lineHeight:4}}>Sign UP Form</h3>
          <MDBRow>
            <MDBCol xs={"8"} md={"8"}>
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                name="email"
                label="email"
                required
              >
                
              </MDBInput>
            </MDBCol>
            
          </MDBRow>
          <MDBRow>
            <MDBCol xs={"8"} md={"8"}>
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                name="password"
                label="password"
                required
              >
                
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol xs={"8"} md={"8"}>
              <MDBInput
                value={this.state.ConfrimPassword}
                onChange={this.changeHandler}
                type="password"
                name="ConfrimPassword"
                label="password"
                required
              >
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Sign Up
          </MDBBtn>
        </form>
        </Container>
    );
  }
}

export default FormComponent;