import LoginForm from "./Components/LoginForm/LoginForm";
import SignInForm from "./Components/SignInForm/SignInForm";
import Home from "./Pages/Home/Home";

let router = [
    {path: '/', element: <Home />},
    {path: '/Login', element: <LoginForm />},
    {path: '/SignIn', element: <SignInForm />}
]

export default router