import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import { PacmanLoader } from "react-spinners"
import "./itemlistcontainer.css"



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { idCategory } = useParams()

  const collectionName = collection(db, "products")

  const getProducts = async() => {
    try {
      setLoading(true)
      const dataDb = await getDocs(collectionName)

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data)

    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  const getProductsByCategory = async() => {
    try {
      setLoading(true)
      const q = query( collectionName , where("category", "==", idCategory ) )
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })
  
      setProducts(data)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }



  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])

  

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      {
        loading === true ? (<div style = {{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}> < PacmanLoader color="#ff6b00" /> </div>
        ) : ( <ItemList products={products} /> )
      }
    </div>
  )
}

export default ItemListContainer

