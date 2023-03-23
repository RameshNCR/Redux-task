import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddData from "../redux/Action";
function Login() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState ('');
  
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const data = [{
      Username : Username,
      Email : Email,
      Password : Password
    }]
    dispatch(AddData(data));
    setUsername('');
    setEmail('');
    setPassword('');
  }
  
  return(
    <div className="Login">
      <h1>Login</h1>
      <form>
        <label htmlFor = "Username">Username</label>
        <input type = "text" id="Username" value={Username} onChange={(e)=> {setUsername(e.target.value)}}></input>
        <label htmlFor = "Email">Email</label>
        <input type = "email" id = "Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label htmlFor = "Password">Password</label>
        <input type = "password" id="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={submit}>Submit</button>
      </form>
      <Link to = "/">Home</Link>
    </div>
  )
}
export default Login;