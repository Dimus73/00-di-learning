import {useState, useEffect} from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom'

const Product = (props) => {
  const[product, setProduct] = useState([]);
  const[name, setName] = useState('')
  const[price, setPrice] = useState('')

  const param = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductInfo()
  },[])

  const getProductInfo = async() =>{
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`)
      const data = await res.json()
      setProduct(data);

      setName(data[0].name)
      setPrice(data[0].price)

    } catch (e) {
      console.log(e);
    }
  }

  const update = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({name,price})
      })
      const data = await res.json()
      setProduct(data);
      setName(data[0].name)
      setPrice(data[0].price)

    } catch (e) {
      console.log(e);
    }
  }

  const del = async() =>{
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`,{
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
      const data = await res.json()
      console.log(data);
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Product {param.id}</h1>
      <h2>Update Product</h2>
      <form onSubmit={update}>
          Name:<input type='text' value={name}
              onChange={(e)=>setName(e.target.value)}
          />
          Price:<input type='text' value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <input type='submit' value='Update Product' />
      </form>
      <div>
        <h2>Delete Product</h2>
        <button onClick={del}>Delete Product</button>
      </div>
      {
        product.map(item => {
          return(
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}$</p>
            </div>
          )
        })
      }
      <Link to='/'>Back to Shop</Link>
    </div>

  )
}
export default Product
