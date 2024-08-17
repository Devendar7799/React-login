import  { useState} from 'react'
import './App.css';


function Login(props) {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, field) => {
        const val = e.currentTarget.value;
        if (field === 'username') {
            setUsername(val);
        } else {
            setPassword(val);
        }
    }

      return (      
        <div className="Login">
            <input  value={username} onChange={(e) => handleChange(e, 'username')}/>
            <input type="password"  value={password} onChange={(e) => handleChange(e, 'password')}/>
            <button onClick={() => props.onLogin() }>Login</button>
        </div>      
      );
}

export default Login;