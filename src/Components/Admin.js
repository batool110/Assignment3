import React from 'react';

class Admin extends React.Component {

  state =({
    FirstName:null,
    lastName: null,
    email: null,
    salary: null,
    jobStartDate: null,
    Employ: []
  })

  addEmploy = () => {

    const {Employ,FirstName,lastName,email,salary,jobStartDate} = this.state;
    
    Employ.push({
      FirstName:  FirstName,
      lastName: lastName,
      email: email,
      salary: salary,
      jobStartDate: jobStartDate,
    })

    this.setState({
      FirstName: "",
      lastName: "",
      email: "",
      salary: "",
      jobStartDate: "",
    })
  }

  delete = (id) => {
    const {Employ, FirstName,lastName,email,salary,jobStartDate} = this.state;

    Employ.splice(id,1);
    this.setState({
      FirstName:  FirstName,
      lastName: lastName,
      email: email,
      salary: salary,
      jobStartDate: jobStartDate,
    })
  }

  update = (id) => {
    const {Employ} = this.state;

    Employ.map((value,index) => {
      
        this.setState({
          FirstName:  value.FirstName,
          lastName: value.lastName,
          email: value.email,
          salary: value.salary,
          jobStartDate: value.jobStartDate,
        })
        Employ.splice(id,1);
    })  
  }

  handelInput = (ev) => {
    this.setState({
      [ev.target.name] : ev.target.value,
    })
  }

  render(){
    return (
      <React.Fragment>

          first name<input
          type="text"
          name= "FirstName"
          value={this.state.FirstName}
          onChange={this.handelInput}
          />

          <br />

          last name<input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handelInput}
          />

          <br />

          email<input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handelInput}
          />

          <br />

          salary<input
          type="number"
          name="salary"
          value={this.state.salary}
          onChange={this.handelInput}
          />

          <br />

          job start date<input
          type="date"
          name="jobStartDate"
          value={this.state.jobStartDate}
          onChange={this.handelInput}
          />

          <br />
          <br />

          <button onClick={this.addEmploy}>Add Employ</button>

          <br />
          <br />
          <br />
          <br />

          {
            this.state.Employ.map((value, index) =>{
              return(
                <React.Fragment key={index}>
                  <table border="2px">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Salary</th>
                      <th>Job Start Date</th>
                    </tr>
                    <tr>
                      <td>{value.FirstName}</td>
                      <td>{value.lastName}</td>
                      <td>{value.email}</td>
                      <td>{value.salary}</td>
                      <td>{value.jobStartDate}</td>
                    </tr>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.update}>Update</button>
                  </table>
                </React.Fragment>
              )
            })
          }
       
      </React.Fragment>
    );
  }
}

export default Admin;