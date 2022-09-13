import axiosClient from "../axiosClient";

class AuthService {
  login = (user) => {
    const url = "/auth/login";
    return axiosClient.post(url, user);
  };
  refreshToken = (token) => {
    const url = "/auth/refreshtoken";
    return axiosClient.post(url, { token: token });
  };
}
const authService = new AuthService();
export default authService;
