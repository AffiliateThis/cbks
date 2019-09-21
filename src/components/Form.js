import React from "react";


class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: ""
  }
  render() {
    return (
        <form>
            <input placehoder='First Name'value={this.state.firstName}/>
        </form>

    )

  }

}



export default Form;