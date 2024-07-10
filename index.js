import express from 'express';
import UserRoute from './src/routes/UserRoute';

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server is listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('Welcome to my web server');
});

app.use(express.json());

// using as middleware
app.use('/api/v1/user', UserRoute);
