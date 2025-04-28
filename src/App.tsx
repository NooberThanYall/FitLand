import TopBar from './Components/Global/TopBar/TopBar'
import BottomMenu from './Components/Global/BottomMenu/BottomMenu'
import NavBar from './Components/Global/NavBar/NavBar'
import Footer from './Components/Global/Footer/Footer'
import { useRoutes } from 'react-router'
import router from './route'
import { useLocation } from 'react-router'

function App() {

  const routes = useRoutes(router)

  let location = useLocation()
  let isInLoginPage = location.pathname === '/Login'
  let isInSignInPage = location.pathname === '/SignIn'

  return (
    <div>
      {!isInLoginPage && !isInSignInPage && <TopBar />}
      {!isInLoginPage && !isInSignInPage && <NavBar />}
      {routes}
      <BottomMenu />
      {!isInLoginPage && !isInSignInPage && <Footer />}
    </div>
  )
}

export default App
