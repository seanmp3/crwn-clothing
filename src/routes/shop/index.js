import {Routes, Route} from "react-router-dom"

import CategoriesPreview from "../categoriesPreview/index"
import Category from "../../components/category/index"

import "../../styles/shop.scss"

const Shop = () => {
  return(
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
