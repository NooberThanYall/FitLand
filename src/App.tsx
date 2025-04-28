import TopBar from './Components/Global/TopBar/TopBar'
import BottomMenu from './Components/Global/BottomMenu/BottomMenu'
import NavBar from './Components/Global/NavBar/NavBar'
import Footer from './Components/Global/Footer/Footer'
import { useRoutes } from 'react-router'
import router from './route'

function App() {

  const routes = useRoutes(router)

  return (
    <div>
      <TopBar />
      <NavBar />
      {routes}
      <BottomMenu />
      <Footer />
    </div>
  )
}

export default App
