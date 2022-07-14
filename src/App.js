import {Routes, Route} from "react-router-dom"

import Home from "./routes/home/index"
import Shop from "./routes/shop/index"
import Authentication from "./routes/authentication/index"
import Navigation from "./routes/navigation/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
