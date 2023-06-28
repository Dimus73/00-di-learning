import {Link,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios'

const Nav = (props) => {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      const response = await axios.delete('/logout',{},{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log('register=>', response);
      if(response.status == 200 || response.status == 204){
        navigate('/login')
      }
    } catch (e) {
      console.log(e);
    }
  }
  return(
    <div>
      <Stack spacing={2} direction="row">
        <Button component={Link} to='/' >Home</Button>
        <Button component={Link} to='/admin' >Admin</Button>
        <Button component={Link} to='/login' >Login</Button>
        <Button component={Link} to='/register'>Register</Button>
        <Button onClick={logout}>Logout</Button>
      </Stack>
    </div>
  )
}
export default Nav;
