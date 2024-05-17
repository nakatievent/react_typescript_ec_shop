import * as api from "../api/AuthAPI"
import { User } from "../types/User"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation
} from '@tanstack/react-query'
import { toast } from "react-toastify"
import { AxiosError } from "axios"


// const useUser = () => {
//   return useQuery('users', api.getUser)
// }

// const { data, isPending } = useQuery({
//   queryKey: ["users"],
//   queryFn: () => axios.get("/issues").then(res => res.data)
// })

// const useLogin = () => {
//   return useMutation(api.login, {
//     onSuccess: (user: User) => {
//       console.log(user)
//     },
//     onError: () => {
//       toast.error('ログインに失敗しました')
//     }
//   })
// }

// const useLogout = () => {
//   return useMutation(api.logout, {
//     onSuccess: (user: User) => {
//       console.log(user)
//     },
//     onError: () => {
//       toast.error('ログアウトに失敗しました')
//     }
//   })
// }

// export {
//   useUser,
//   useLogin,
//   useLogout
// }
