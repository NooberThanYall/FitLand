import LoginForm from "./Components/LoginForm/LoginForm";
import Home from "./Pages/Home/Home";

let router = [
    {path: '/', element: <Home />},
    {path: '/Login', element: <LoginForm />}
]

export default router