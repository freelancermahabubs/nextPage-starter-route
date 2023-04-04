import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className='min-h-[cal(100vh-136px)]'>
      <Header/>
      <Outlet/>
      {/* Footer */}
     <Footer/>
    </div>
  )
}

export default App
