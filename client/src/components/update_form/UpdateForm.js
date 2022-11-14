
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
function Form() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        date:"",
        password: "",


    })

    const { name, email,date, password} = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    console.log(user)
    useEffect(() => {
        loadUser()
    }, [])


    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post(`http://localhost:3001/edit`, user);
        navigate("/userList");
    };
    const id = useParams();
    console.log(id)
    const loadUser = async () => {
        const result = await Axios.post(`http://localhost:3001/user`, id)
        setUser(
            {
                id: result.data[0].id,
                name: result.data[0].name,
                email: result.data[0].email,
                date:result.data[0].date,
                password: result.data[0].password,
            }
           
        )
    }

    return (

        <section >
            <div class="container">
                <div class="row">
                    {/* ******************************* form container**************************** */}
                    <div class="col form img-thumbnail">
                        <form onSubmit class="row g-3 needs-validation" novalidate>
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
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                    name="name"
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
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                    name="email"
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
                                        value={date}     
                                        onChange={e => onInputChange(e)}
                                        name="date"
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
                                    value={password}
                                    onChange={e => onInputChange(e)}
                                    name="password"
                                />
                            </div>

                            <div class="col-12">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        // value=true
                                        defaultChecked={true}
                                        id="invalidCheck"
                                        required
                                        // value={}
                                        // onChange={e => onInputChange(e)}
                                        name="agree"
                                    />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-11">
                                <button type="submit" class="btn btn-primary add" onClick={onSubmit}>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                    {/******************************** form container**************************** */}
                    {/* <div class="col img-con">
            <img
              src={require("./form_img.jpg")}
              alt="loading"
              className="img-thumbnail form_img"
            />
          </div> */}
                </div>
            </div>
        </section>
    );
}
export default Form;
