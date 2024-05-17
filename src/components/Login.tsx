import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
// import axios from "axios";
import axios, { AxiosInstance } from 'axios';

import { memo, useState } from "react";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

export const Login = memo(() => {
  const [userId, setUserId]     = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "450px",
    width: "400px",
    variant: "outlined",
  };
  
  const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
  });

  const onClickLogin = async () => {
    http.get('/sanctum/csrf-cookie').then((res) => {
    // await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((res) => {
      const authStatus = axios
        .post<User>("http://127.0.0.1:8000/api/tokens/create", {
          email: userId,
          password,
        })
        .then(() => navigate("/home"))
        .catch((error) => {
          navigate("/fail_login");
        });
      console.log("authStatus: ", authStatus);
      console.log("authStatus: ", res);
      
    })
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={20}
    >
      <Card style={cardStyle}>
        <CardHeader title="ログインページ" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClickLogin}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
});
