import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import Contacts from "./pages/Contacts/Contacts"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
