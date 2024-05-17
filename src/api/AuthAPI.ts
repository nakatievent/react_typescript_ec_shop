import axios from "axios";
import { User } from "../types/User";

const getUser = async () => {
  const { data } = await axios.get<User>('api/user')
  return data
}

const login = async ({ email, password }: {email: string, password: string}) => {
  const { data } = await axios.get<User>('api/login')
  return data
}

const logout = async ({ email, password}: {email: string, password: string}) => {
  const { data } = await axios.get<User>('api/logout')
  return data
}

export {
  getUser,
  login,
  logout
}
