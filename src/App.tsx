import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/NotFound"
import { ThemeProvider } from "./contexts/ThemeContext"


function App() {
   

  return (
    <ThemeProvider>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
     
     </Routes>
     </BrowserRouter>
    </ThemeProvider>
  )
}


export default App
