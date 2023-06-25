const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [
  { id: 1, name: 'John Doe', gender: 'Male', age: 25 },
  { id: 2, name: 'Jane Smith', gender: 'Female', age: 32 },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, gender, age } = req.body;
  const newUser = { id: users.length + 1, name, gender, age };
  users.push(newUser);

  res.json(newUser);
});


const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
