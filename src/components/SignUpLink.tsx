import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="underline hover:text-primary text-stone-100 text-2xl" onClick={() => loginWithRedirect()}>Sign up or Log in!</button>;
};

export default Login;