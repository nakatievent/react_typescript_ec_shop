import * as React from 'react';
import { FC, useState, useMemo, useCallback, memo, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CustomButton } from '../components/atoms/Button';
import { CustomTextField } from '../components/atoms/TextField';
import { CustomLink } from '../components/atoms/Link';
import { CustomBox } from '../components/atoms/layout/Box';
import { CustomTypography } from '../components/atoms/Typography';
import { CustomAvatar } from '../components/atoms/Avatar';
import { CustomFormControlLabel } from '../components/atoms/FormControlLabel';
import { Copyright } from '../components/modules/Copyright';
import axios from 'axios';
import { CustomTestText } from '../components/atoms/TestText';

type Props = {
  count: string
}

// export const SignIn: React.FC<> = React.memo()
export const SignIn: FC = () => {
  // export const SignIn: React.FC = React.memo(() => {
  const defaultTheme = createTheme();
  const CopyrightMemo = memo(() => <Copyright sx={{ mt: 8, mb: 4 }}/>)

  const [email, setEmail]       = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [navigate, setNavigate] = useState<boolean>(false)
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log('lsaejra;a')
    
    const formData = new FormData(e.currentTarget);
    
    const http = axios.create({
      baseURL: 'http://127.0.0.1:8000',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: true,
      withXSRFToken  : true,
    })
    
    const { data } = await http.post('api/login', {
      email   : formData.get('email'),
      password: formData.get('password')
    });
    
    if (data.success) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`
      setNavigate(true)
    }
  }

  if (navigate) {
    return <Navigate to="/home"/>;
  }
  
  
  // useEffect(() => {
  //   getUser()
  // }, [])
  
  // async function getUser() {
  //   const csrf = await http.get('/sanctum/csrf-cookie')
  //   console.log('csrf = ', csrf)
    
  //   const login = await http.post('/api/login', {
  //     email: 'nakatievent@gmail.com',
  //     password: 'password'
  //   })
  //   console.log('login = ', login)
    
  //   const token = login.data.token;

  //   // トークンをヘッダーに追加してユーザー情報を取得
  //   const userResponse = await http.get('/api/user', {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
    
  //   const userResponse = await http.get('/api/user');

  //   console.log('User:', userResponse);
  // }
  
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         axios.get('http://127.0.0.1:8000/api/user', {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching user data:', error);
//         });
//     }
// }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <CustomBox
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CustomAvatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </CustomAvatar>
          <CustomTestText />
          <CustomTypography component="h1" variant="h5">
            ログイン
          </CustomTypography>
          <CustomBox component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              autoFocus
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              value={password}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <CustomFormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </CustomButton>
            <Grid container>
              <Grid item xs>
                <CustomLink href="#" variant="body2">
                  Forgot password?
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </CustomLink>
              </Grid>
            </Grid>
          </CustomBox>
        </CustomBox>
      </Container>
      <CopyrightMemo />
    </ThemeProvider>
  );
}

<CustomLink href="#" variant="body2">
  {"Don't have an account? Sign Up"}
</CustomLink>
