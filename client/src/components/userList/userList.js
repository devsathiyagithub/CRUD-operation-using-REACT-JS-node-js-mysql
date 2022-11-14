import "./userList.css";
import Axios from 'axios'
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";

function UserList() {
  const [data, getData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      getData(response.data);
    });
  };
  const delete_data = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setDeleteData(
        deleteData.filter((value) => {
          console.log(value.id)
          return value.id !== id;
        })
      );
    });
  };
  var x = 0;
  // console.log("data",data[x])

  const update_form = (id) => {
    navigate(`/update_user/`+ id)
  }
 




  return (
    <>
  
      <div className="bg-color">
        <h1 className="hedding">Users Data Table</h1>
        <tbody>
          <div className="styles">
            {data.map((item, i) => (
              <div key={i} className="data" id={"data-box-" + i}>
                <div className="data-div">
                  <p>
                    <div className="icon">

                    edit<span class="material-symbols-outlined hover-icon" onClick={() => { update_form(item.id) }}>
                        edit
                      </span>
                      <span class="material-symbols-outlined hover-icon" onClick={() => { delete_data(item.id);}} >
                        close
                      </span>delete
                    </div>
                    <span className="gold-color"> Name : </span>
                    <span>{item.name}</span>
                  </p>
                  <p>
                    <span className="gold-color"> Id :</span>
                    <span>{item.id}</span>
                  </p>
                  <p>
                    <span className="gold-color"> Email : </span>
                    <span>{item.email}</span>
                  </p>
                  <p>
                    <span className="gold-color"> DOB :</span>
                    <span>{item.date}</span>
                  </p>
                  <p>
                    <span className="gold-color"> password :</span>
                    <span>{item.password}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </tbody>
      </div>
    </>
  );
}

export default UserList;
