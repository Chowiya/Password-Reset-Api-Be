const express = require('express');
const authRouter = require('./routes/authRoutes');
const cors = require('cors')



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Allow requests from both Netlify and local development
const allowedOrigins = [
    'https://myapp-fe.netlify.app',
    'http://localhost:5173'  // For local testing
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));

  

app.use('/auth',authRouter)


module.exports= app 