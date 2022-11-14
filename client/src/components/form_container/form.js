import "./form.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// import updateValue from "D:/curd_react/curd_react/src/components/userList/userList.js"


function Form() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setdate] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [DataList, setDataList] = useState([]);

  const [submit,setSubmit] = useState(false);


  

  const addData = () => {
    Axios.post("http://localhost:3001/add", {
      name: name,
      email: email,
      date: date,
      password: password,
      agree: agree,
    }).then(() => {
      setDataList([
        ...DataList,
        {
          name: name,
          email: email,
          date: date,
          password: password,
          agree: agree,
        },
      ]);
    });

    
    
    if(name.length===0 && email.length===0 && date.length===0 && password.length===0 ){
      setSubmit(false)
    }
  };
  return (

    <section >
      <div class="container">
        {
         submit ? <div>DATA SEND SUCESSFULL</div>:<div></div>
        }
        <div class="row">
          {/* ******************************* form container**************************** */}
          <div class="col form img-thumbnail">
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-11">
                <label for="validationCustom01" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Enter Your Name"
                  required
                  name="name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  autoComplete="off"
                />
              </div>
              <div class="col-md-11">
                <label for="validationCustom02" class="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  autoComplete="off"
                />
              </div>


              <div class="col-md-11">
                <label for="validationCustomUsername" class="form-label">
                  Date Of Birth
                </label>
                <div class="input-group has-validation">
                  <input
                    type="date"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="date"
                    onChange={(event) => {
                      setdate(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="col-md-11">
                <label for="validationCustom03" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Enter Your Password"
                  required
                  name="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                    name="agree"
                    onChange={(event) => {
                      setAgree(event.target.value);
                    }}
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>

              <div class="col-md-11">
                <button type="submit" class="btn btn-primary add" onClick={addData}>
                  Add
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Form;
