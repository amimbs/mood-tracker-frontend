
import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Grid from '@mui/material/Grid';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  // let callBackend = (e) => {
  //   fetch('http://localhost:3001/').then(res => res.json()).then(data => {
  //     console.log(data)
  //   })
  // }

  return (
    <div className="App">
      <h1>My App</h1>

      <Grid container spacing={2}>
        <Grid item>
          <Link to="/">Home</Link>
          <br />
          <Link to="/signIn">SignIn</Link>
          <br />
          <Link to="/signUp">SignUp</Link>
        </Grid>

        <Routes>
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Grid>

    </div>
  );
}

export default App;
