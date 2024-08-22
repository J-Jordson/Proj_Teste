import { useState } from 'react';
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";


export default function App() {
  const [user, setUser] = useState('');

  return !user ? <Login setUser={setUser} /> : <Home/>;
}