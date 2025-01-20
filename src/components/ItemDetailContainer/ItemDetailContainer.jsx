import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { idProduct } = useParams()

  const getProduct = async() => {
    try {
      setLoading (true)
      const docRef = doc(db, "products", idProduct)
      const dataDb = await getDoc(docRef)

      const data = { id: dataDb.id, ...dataDb.data() }

      setProduct(data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }



  useEffect(()=> {
    getProduct()
       
  }, [idProduct])

  return (
    <div>
    {
        loading === true ? (<div style = {{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}> < PacmanLoader color="#ff6b00" /> </div>
        ) : (  <ItemDetail product={product} /> )
      }
    

  </div>
  )
}

export default ItemDetailContainer