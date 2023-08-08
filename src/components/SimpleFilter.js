import React from 'react'

function SimpleFilter() {
    const products = [
        { name: "Biscuit", price: 1.99 },
        { name: "Bread", price: 3 },
        { name: "juice", price: 2.99 },
        { name: "lollipop", price: 1.99 },
        { name: "ice cream", price: 3.99 },
      ];
    
    const expensiveProducts = products.filter(product =>
        product.price > 2
    )
      
  return (
    <div>
        {
            expensiveProducts.map(product =>
                <h2>{product.name}</h2>
            )
        }
        
    </div>
  )
}

export default SimpleFilter