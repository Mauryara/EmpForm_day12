import { LitElement, css, html } from "lit";

import { repeat } from "lit/directives/repeat.js";

export class Data extends LitElement {
  static styles = css`
    .form-center {
      width: 229%;
      color: black;
      display: flex;
      justify-content: center;
    }
    

    h1 {
      font-family: "Open Sans", sans-serif;
      text-align: center;
      color: white;
      margin: -1px -10px 0px;
      height: 62px;
      border-radius: 10px 10px 0px 0px;
      background: linear-gradient(90deg, #ff5858d2 0%, #be0afa 100%);
    }

    form {
      width: 648px;
    border-radius: 10px;
    padding: 1px 10px;
    margin: -88px auto;
    background: rgb(255, 255, 255);
    display: inline-grid;
    place-content: space-evenly center;
    place-items: center stretch;
    box-shadow: black 0px 0px 16px;
}
    

    form tr:hover {
      background-color: #454545ee;
      
      
    }

    label {
      display: inline;
      margin-top: 10px;
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
    }
    #search-bar input {
      float: right;
      padding: 5px;
      margin-top: -31px;
      margin-bottom: 53px;
      font-size: 17px;
      box-shadow: black 0px 0px 10px;
      border-radius: 3px;
    }

    input[type="text"],
    input[type="email"] {
      padding: 5px;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 3px;
      height: 20px;
      background-color: #fffffff1;
      color: black;
    }

    input[type="text"]:hover {
      border-color: #fff;
    }
    input[type="email"]:hover {
      border-color: #fff;
    }

    .btn {
      width: 100%;

      border-radius: 5px;
      background: linear-gradient(90deg, #ff5858d2 0%, #be0afa 100%);
      color: white;
      padding: 6px 38px 6px 15px;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      margin: 10px -7px;
      display: inline;
    }

    #cancel {
      width: 100%;
      border-radius: 5px;
      background: #fff;
      color: black;
      padding: 6px 38px 6px 15px;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      margin: 10px -7px;
    }

    select {
      width: 100%;
      height: 27px;
      margin: 5px 0 0;
      padding: 5px;
      background: white;
      border-color: #fff;
      border-radius: 4px;
      height: 33px;
      background-color: #ffffff20;
      color: #ffffff9c;
    }
    select:hover {
      color: black;
      border-color: #fff;
    }

    input {
      width: 282px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      box-shadow: black 0px 0px 16px;
    }
    .EditDetails table {
      box-shadow: none;
    }

    th {
      color: white;
      padding: 16px;
      font-size:16px;
    }
    td,
    tr {
      color: black;
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid black;
    }

    #mainTable thead tr {
      background: linear-gradient(90deg, #ff5858d2 0%, #be0afa 100%);
    }

    tr {
      background: #fff;
    }

    tr:hover {
      background: #feeaff;
      box-shadow: black  0px 0px 10px;
    }

    #mainTable .EditDetails tr {
      background: none;
    }

    #mainTable .EditDetails tr:hover {
      background: none;
      box-shadow: none;
    }
    #mainTable .EditDetails tr,
    td {
      border-bottom: none;
    }
    h3 {
      color: white;
    }
    #fullDetails {
      position: relative;
    }
    #mainTable .card {
      position: absolute;
      color: black;
    }
    input {
      border: none;
      border-radius: 5px;
    }
    #childTable tr {
      background-color: #111;
      padding: 8px;
    }
    #btn button {
      background-color: #fff;
      color: black;
      padding: 3px 8px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      width: 45%;
      border-radius: 5px;
      cursor: pointer;
    }
    .pencilIcon {
      margin-right: 15px;
      cursor: pointer;
      color: blue;
    }
    .trashIcon {
      cursor: pointer;
      color: red;
    }
    select:focus {
      border-radius: 4px;
      -webkit-box-shadow: 0 0 5px 2px #fff;
      -moz-box-shadow: 0 0 5px 2px #fff;
      box-shadow: 0 0 5px 2px #fff;
    }
    input:focus {
      border-radius: 3px;
      -webkit-box-shadow: 0 0 5px 2px #fff;
      -moz-box-shadow: 0 0 5px 2px #fff;
      box-shadow: 0 0 5px 2px #fff;
    }
    .row {
      padding: 0 10px;
      margin-top: 10px;
    }
    .col {
      display: inline-grid;
      padding: 0 10px;
    }
    span{
      color:red;
    }
    sl-input {
      width: 292px;
    }
  `;

  static properties = {
    empData: { type: Array },
    filteredformData: { type: Array },
  };

  constructor() {
    super();
    this.empData = JSON.parse(localStorage.getItem("empData")) || [];
    this.filteredformData = [...this.empData];
    console.log(this.filteredformData);
    console.log(this.empData);

    this.updateUser = null;
  }

  render() {
    return html`
      <div id="search-bar">
        <input @input="${this.handleSearch}" placeholder="Search..." />
      </div>
      
      <table id="mainTable">
        <div class="fullDetails">
        <thead>
          <tr>
            <th>Name</th>
            <th>Empcode</th>
            <th>Official Email</th>
            <th>Personal Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>Landmark</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Actions</th>
          </tr>
        </thead>

        ${repeat(
          this.filteredformData,
          (item) => html`
            <tr>
              <td>${item.fullName}</td>
              <td>${item.employeeCode}</td>
              <td>${item.officialEmail}</td>
              <td>${item.personalEmail}</td>
              <td>${item.designation}</td>
              <td>${item.department}</td>
              <td>${item.addressLine1}</td>
              <td>${item.addressLine2}</td>
              <td>${item.landmark}</td>
              <td>${item.country}</td>
              <td>${item.state}</td>
              <td>${item.city}</td>

             
              <td>${item.zip}</td>
              <td id="btn1">

             <sl-icon class="pencilIcon" name="pencil-square" @click="${() =>
               this.edit(item)}"></sl-icon>
      
            
             <sl-icon  class="trashIcon" name="trash3" @click="${() =>
               this.delete(item)}" ></sl-icon>
        </td>

            
            
            </tr>
        </div>
        <div class="EditDetails">
            ${
              this.updateUser === item
                ? html`
                
                    <div class="card">
                    <div class="form-center">
          <form>
            <h1>Employee Registration</h1>
            
            <div class="row">
            <div class="col">

            
                  <label for="fullName"> Full Name<span>*</span></label>
               
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.fullName}"
                    @input="${(e) => (item.fullName = e.target.value)}"
                  />

                </div>

                <div class="col">
              <label for="employeeCode">Employee Code<span>*</span></label>

                  <sl-input
                    clearable
                    type="text"
                    .value="${item.employeeCode}"
                    @input="${(e) => (item.employeeCode = e.target.value)}"
                  />
                 </div>
                </div>
              
                <div class="row">
                <div class="col">
                  <label for="officialEmail">Official Email<span>*</span></label>
            
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.officialEmail}"
                    @input="${(e) => (item.officialEmail = e.target.value)}"
                  />
                  </div>

                  <div class="col">
                  <label for="personalEmail">Personal Email<span>*</span></label>
                
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.personalEmail}"
                    @input="${(e) => (item.personalEmail = e.target.value)}"
                  />
                  </div>
                 </div>
              

                 <div class="row">
                <div class="col">
                  <label> Designation<span>*</span> </label>
               
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.designation}"
                    @input="${(e) => (item.designation = e.target.value)}"
                  />
                </div>

                <div class="col">
                  <label> Department<span>*</span> </label>
                
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.department}"
                    @input="${(e) => (item.department = e.target.value)}"
                  />
                </div>
                 </div>
              <!-- <tr>
                            <td>
                              <h2>Address</h2>
                            </td>
                          </tr> -->

             
                <div class="row">
                <div class="col">
                  <label for="addressLine1">Address Line 1<span>*</span></label>

                
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.addressLine1}"
                    @input="${(e) => (item.addressLine1 = e.target.value)}"
                  />
                </div>

               
                <div class="col">
                  <label for="addressLine2">Address Line 2  </label>
                
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.addressLine2}"
                    @input="${(e) => (item.addressLine2 = e.target.value)}"
                  />
                 </div>
                 </div>
              

                 <div class="row">
                <div class="col">
                  <label for="landmark">Landmark<span>*</span></label>
               
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.landmark}"
                    @input="${(e) => (item.landmark = e.target.value)}"
                  />
                 </div>


                 <div class="col">
                  <label for="city">City<span>*</span></label>
              
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.city}"
                    @input="${(e) => (item.city = e.target.value)}"
                  />
                 </div>
                </div>
             

                <div class="row">
                <div class="col">
                  <label for="state">State<span>*</span></label>
                
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.state}"
                    @input="${(e) => (item.state = e.target.value)}"
                  />
                </div>

                <div class="col">
                
                  <label for="country">Country<span>*</span></label>
                </td>
                <td>
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.country}"
                    @input="${(e) => (item.country = e.target.value)}"
                  />
                 </div>
                 </div>
            
                 <div class="row">
                <div class="col">
                  <label for="zip">Zip<span>*</span></label>
               
                  <sl-input
                    clearable
                    type="text"
                    .value="${item.zip}"
                    @input="${(e) => (item.zip = e.target.value)}"
                  />
                 </div>

                 <div class="col">
                </div>
                 
                
                <div class="row">
                <div class="col">
    

            <button class="btn" @click="${() => this.saveUser(item)}">
              Save
            </button>
            </div>
            <div class="col">
            <button
              class="btn"
              @click="${() => this.cancelEdit(null)}"
              id="cancel"
            >
              Cancel
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
                  `
                : ""
            }
          </div>
          `
        )}
      </table>
    `;
  }

  delete(user) {
    if (confirm(`Are you sure you want to delete ${user.fullName}?`)) {
      this.deleteUser(user);
    }
  }
  deleteUser(user) {
    const index = this.empData.indexOf(user);
    if (index > -1) {
      this.empData.splice(index, 1);
      localStorage.setItem("empData", JSON.stringify(this.empData));
      this.requestUpdate();
      window.location.reload();
    }
  }

  edit(user) {
    this.updateUser = user;
    this.requestUpdate();
  }
  cancelEdit(user) {
    localStorage.setItem("empData", JSON.stringify(this.empData));
    this.updateUser = null;
    this.requestUpdate();
  }
  saveUser(user) {
    localStorage.setItem("empData", JSON.stringify(this.empData));
    this.updateUser = null;
    this.requestUpdate();
    alert("Update Successful...");
  }
  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredformData = this.empData.filter(
      (emp) =>
        emp.fullName.toLowerCase().includes(query) ||
        emp.employeeCode.toLowerCase().includes(query)
    );
  }
}

customElements.define("emp-data", Data);
