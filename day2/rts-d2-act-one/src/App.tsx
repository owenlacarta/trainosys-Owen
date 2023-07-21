import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './assets/Product.css'
import Card from './Components/Card'



function App() {
  const [count, setCount] = useState(0)

var productlist = [
  {
    imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    title: "Basic Tee",
    price: "35"
  }];

  var productlist2 = [ {  imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
  title: "Basic White Tee",
  price: "35"
}];
 
  var productlist3 = [   {
    imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    title: "Basic Charcoal Tee",
    price: "35"
  },
  ];

  var productlist4 = [
  {
    imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    title: "Artwork Dots Tee",
    price: "45"
  }
];
  
  return (
    <div className="app">
        <div className='container'>
        <div className="card z-index-2 h-100">
          <div className="card-header pb-0 pt-3 bg-transparent ">
            <div>
        {
          productlist.map((product, index) => (
            <Card key={index}  imageUrl={product.imageUrl} title={product.title}  price={product.price} />
          ))
        }
        </div>
        </div>
        </div>

        <div className="card z-index-2 h-100">
          <div className="card-header pb-0 pt-3 bg-transparent ">
        <div>
        {
          productlist2.map((product, index) => (
            <Card key={index}  imageUrl={product.imageUrl} title={product.title}  price={product.price} />
          ))
        }
        </div>
        </div>
        </div>

        <div className="card z-index-2 h-100">
          <div className="card-header pb-0 pt-3 bg-transparent ">

        <div>
        {
          productlist3.map((product, index) => (
            <Card key={index}  imageUrl={product.imageUrl} title={product.title}  price={product.price} />
          ))
        }
        </div>

        </div>
        </div>

        <div className="card z-index-2 h-100">
          <div className="card-header pb-0 pt-3 bg-transparent ">

        <div>
        {
          productlist4.map((product, index) => (
            <Card key={index}  imageUrl={product.imageUrl} title={product.title}  price={product.price} />
          ))
        }
        </div>

        </div>
        </div>
       
      </div>
      

    </div>
  )
}

export default App