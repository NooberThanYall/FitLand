import Cart from "./Components/Cart/Cart";
import LoginForm from "./Components/LoginForm/LoginForm";
import Shop from "./Components/Shop/Shop";
import SignInForm from "./Components/SignInForm/SignInForm";
import Home from "./Pages/Home/Home";

let router = [
    { path: '/', element: <Home /> },
    { path: '/Login', element: <LoginForm /> },
    { path: '/SignIn', element: <SignInForm /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/Shop', element: <Shop /> }
]

export default router