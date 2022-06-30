import {Routes, Route} from "react-router-dom"

import Home from "./routes/home/index"
import Navigation from "./components/navigation-bar/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
    </Routes>
  )
}

export default App
