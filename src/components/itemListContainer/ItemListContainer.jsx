import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (false)
  

  const { idCategory } = useParams()

  useEffect(() => {
    setLoading (true)

    getProducts()
      .then((data) => {
        if(idCategory){
          //filtrar la data por ese valor
          const filterProducts = data.filter( (product) => product.category === idCategory )
          setProducts(filterProducts)
        }else{
          //guardar toda la lista de los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading (false)
      })
  }, [idCategory])

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
        {
          loading === true ? (<div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems:"center"}}> <PacmanLoader color="#ff8a00" /> </div>) : ( <ItemList products={products} />)
        }

    </div>
  )
}
export default ItemListContainer