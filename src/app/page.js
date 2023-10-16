import './app.css'
import "./responsive.css"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  )
}
