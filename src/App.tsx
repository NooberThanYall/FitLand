import TopBar from './Components/Global/TopBar/TopBar'
import BottomMenu from './Components/Global/BottomMenu/BottomMenu'
import NavBar from './Components/Global/NavBar/NavBar'
import Footer from './Components/Global/Footer/Footer'
import ScrollToTop from './Components/scrollToTop/ScrollToTop'
import { useRoutes, useLocation } from 'react-router'
import router from './route'

function App() {

  const routes = useRoutes(router)
  let location = useLocation()
  
  let isInLoginPage = location.pathname === '/Login'
  let isInSignInPage = location.pathname === '/SignIn'

  return (
    <div>
      <ScrollToTop />
      {!isInLoginPage && !isInSignInPage && <TopBar />}
      {!isInLoginPage && !isInSignInPage && <NavBar />}
      {routes}
      <BottomMenu />
      {!isInLoginPage && !isInSignInPage && <Footer />}

    </div>
  )
}

export default App
