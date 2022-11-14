const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "sathiya",
});



app.post("/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const date = req.body.date;
  const password = req.body.password;
  const agree = req.body.agree;

  db.query(
    "INSERT INTO user_data (name, email, date, password, agree) VALUES (?,?,?,?,?)",
    [name, email, date, password, agree],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
        console.log('Values Inserted')
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM user_data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users-data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post('/user', (req, res) => {

  const sqlView = `SELECT * FROM user_data WHERE id=${req.body.id}`
  db.query(sqlView, (err, result,) => {
    res.send(result)

  })
})


app.post('/edit', (req, res) => {

  const id = req.body.id
  const name = req.body.name;
  const date = req.body.date;
  const email = req.body.email;
  const password = req.body.password;
  const sqlUpdate = `UPDATE user_data  SET  name=?,email=?,date=?,password=?  WHERE id=${id}`;
  db.query(sqlUpdate, [name, email,date,password], (err, result) => {
    res.send(result)
  })

})

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM user_data WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
