import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Grid from '@mui/material/Grid';
import DashBoard from './pages/DashBoard';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'


function App() {
  const [user_id, setUserId] = useState(null)
  const logOut = () => {
    setUserId(null)
  }

  return (
    <div className="App">
      <h1>My App</h1>

      <Grid container spacing={2}>
        <Grid item>
          <Link to="/">Home</Link>
          <br />
          <Link to="/signin">SignIn</Link>
          <br />
          <Link to="/signup">SignUp</Link>
          <br />
          <button onClick={logOut}>Log Out</button>
        </Grid>

        <Routes>
          <Route path='/signin' element={<SignIn setUserId={setUserId}/>} />
          <Route path='/signup' element={<SignUp setUserId={setUserId}/>} />
          {user_id ? <Route path='/dashboard' element={<DashBoard user_id={user_id}/>} />: ""}
        </Routes>
      </Grid>

    </div>
  );
}

export default App;
