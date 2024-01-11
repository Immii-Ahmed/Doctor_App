const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const CircularJSON = require('circular-json');
const app = express();
const port = process.env.PORT || 3184;

const { User, Appointment } = require('./Schemas/schemas');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Middlewares
app.use(cors());
app.use(express.json());



app.get('/getUsers',async (req, res) => {
  const doctors = await User.find({ role: 'doctor' });
  const jsonString = CircularJSON.stringify(doctors);
  res.send(jsonString);
});

  app.post('/signup', (req, res) => {
    const { user } = req.body;
  
    const newUser = {
      ...user
    }
  
    const regUser = new User(newUser);
    // Obj with Data
  
    regUser.save().then((res) => {
      console.log('User Registered Successfully')
    }).catch((err) => {
      console.log(err)
    })
  
    res.send(user)
  });

  app.post('/appointment', (req, res) => {
    const { appointments} = req.body;
  
    const newAppointments = {
      ...appointments
    }
  
    const regAppointments = new Appointment(newAppointments);
    // Obj with Data
  
    regAppointments .save().then((res) => {
      console.log('User Registered Successfully')
    }).catch((err) => {
      console.log(err)
    })
  
    res.send(appointments)
    console.log(appointments)
  });
  app.post('/login', async (req, res) => {
    const { user: { email, password } } = req.body;
    const auth = await User.findOne({ email, password });
    res.send(auth);
    console.log('successfully login')
  })

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from MERN Server!');
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
