const express = require('express')
const app = express()
const {products} = require('./data')
app.get ('/',(req,res)=>{
    res.send(`<h1>Home page</h1><a href =
        "/api/products">products</a>`)
})
// app.get ('/api/products',(req,res)=>{
//     console.log("api")
//     const newp= products.map((product)=>{
//         const {id,name}=product;
//         return {id,name}
//     })
//     res.status(200).json(newp)
// })
// app.get ('/api/products/1',(req,res)=>{
//     console.log("api")
//     const newp= products.find((product)=>
//     product.id==1
//     )
//     const {id,name} = newp
//     res.status(200).json([id,name])
// })


//router param

// app.get ('/api/products/:productID',(req,res)=>{
//     console.log("api")
//     // so basically productid is a property of req obj wuth which we can acces any thing
//     // console.log(req.params)
//     const{productID}=req.params
//     const newp= products.find((product)=>
//     product.id==Number(productID)
//     )
//     if (!newp){
//         return res.status(404).send("product does not exist")
//     }
//     // const {id,name} = newp
//     // res.status(200).json([id,name])
//     res.status(200).json(newp)
// })


//query param
app.get ('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search,limit}=req.query
    let sortedproducts = [...products]
   if(search){
    sortedproducts=sortedproducts.filter((product)=>{
        return product.name.startsWith(search)

    })
   }
   if(limit){
    sortedproducts = sortedproducts.slice(0,Number(limit))
   }
   if(sortedproducts.length<1){
    // return res.status(200).send('no products matched your search')
    return res.status(200).json({ success : true, data: [ ]})
   }
   res.status(200).json(sortedproducts)
})

// Copying Array: The spread operator ... is used to create a shallow copy of the products array. This ensures that any modifications made to sortedproducts do not affect the original products array. In JavaScript, assigning an array directly (sortedproducts = products;) would create a reference to the original array, meaning changes to sortedproducts would also affect products. Using spread syntax avoids this issue by creating a new array with the same elements as products.

// Immutable Operations: In the subsequent operations (filtering and slicing), sortedproducts is modified based on conditions like search and limit. It's good practice to perform such operations on a copy of the array (sortedproducts) rather than directly on the original array (products). This helps maintain the immutability of products, which is often desired to prevent unintended side effects in other parts of the code.









app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})


