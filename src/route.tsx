import Page404 from "./Components/404/Page404";
import Cart from "./Components/Cart/Cart";
import GetAddress from "./Components/Cart/GetAddress/GetAddress";
import Payment from "./Components/Cart/Payment/Payment";
import LoginForm from "./Components/LoginForm/LoginForm";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Shop from "./Components/Shop/Shop";
import SignInForm from "./Components/SignInForm/SignInForm";
import SuccessfulPurchase from "./Components/SuccessfulPurchase/SuccessfulPurchase";
import Home from "./Pages/Home/Home";

let router = [
    { path: '/', element: <Home /> },
    { path: '/Login', element: <LoginForm /> },
    { path: '/SignIn', element: <SignInForm /> },
    { path: '/Cart', element: <Cart /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/MainProduct', element: <ProductDetails /> },
    { path: '/GetAddress', element: <GetAddress /> },
    { path: '/Payment', element: <Payment /> },
    { path: '/SuccessfulPurchase', element: <SuccessfulPurchase /> },
    { path: '*', element: <Page404 /> }
]

export default router