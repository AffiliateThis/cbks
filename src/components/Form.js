import React from "react";




class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company:"",
    notes: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
        <form>
            <input placehoder='First Name'value={this.state.firstName}/>
            <br/>

            <input placehoder='Last Name'value={this.state.lastName}/>
            <br/>

            <input placehoder='Email'value={this.state.email}/>
            <br/>

            <input placehoder='PhoneNumber'value={this.state.phoneNumber}/>
            <br/>

            <input placehoder='Company'value={this.state.company}/>
            <br/>

            <input placehoder='Notes'value={this.state.notes}/>
            <br/>

        </form>
        

    )

  }

}






export default Form;