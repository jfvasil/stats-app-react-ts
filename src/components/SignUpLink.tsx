import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="hover:underline hover:text-primary text-blue-500 text-2xl" onClick={() => loginWithRedirect()}>Sign up or Log in!</button>;
};

export default Login;