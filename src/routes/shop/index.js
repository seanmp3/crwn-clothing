import {useContext} from "react"

import {ProductsContext} from "../../contexts/product"
import ProductCard from "../../components/productCard/index"

import "../../styles/shop.scss"

const Shop = () => {
  const {products} = useContext(ProductsContext)

  return(
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default Shop
