import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductctPage from './Components/ProductctPage';
import { useState, useEffect } from 'react';
import AddProd from './Components/AddProd';

function App() {
  const [addshow, setaddshow] = useState(false);

  const [products, setproducts] = useState([])
  //   {
  //     id:1,
  //     name: 'Iphone',
  //     price: '100000',
  //     description : 'product description will be added soon'
  // },
  // {
  //   id:1,
  //   name: 'Laptop',
  //   price: '100000',
  //   description : 'product description will be added soon'
  // },
  // {
  //   id:1,
  //   name: 'Microwave',
  //   price: '700000',
  //   description : 'product description will be added soon',
    
  // }
  // ])
  
  
  useEffect(()=>
  {
    const getProducts= async ()=>
    {
      const dataFromServer=await fetchtasks()
      setproducts(dataFromServer)
    }
    getProducts()
  },[])

  const fetchtasks= async()=>{
    const res=await fetch('http://localhost:5000/products')
    const data=await res.json();
    return data;
  }

  //adding product
  const addproduct= async(data)=>{
    const res=await fetch('http://localhost:5000/products',{method:'POST',
  headers:{
    'Content-type': 'application/json'
  },
  body:JSON.stringify(data)
})
const datareceived=await res.json()
setproducts([...products,datareceived])
  }



  const show=()=>{
setaddshow(!addshow)
  }

  return (
    <div >
      <Navbar onshow={show} addshow={addshow}/>
      {addshow &&<AddProd onadd={addproduct}/>}
     <ProductctPage product={products} size={'25rem'}/>
      
    </div>
  );
}

export default App;
