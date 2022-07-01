import {Routes, Route} from "react-router-dom"

import Home from "./routes/home/index"
import Navigation from "./routes/navigation/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
