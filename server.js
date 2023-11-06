const express =require("express")
const app =express()
// declearing routes

app.get('/',(reg,res)=>{
  res.send("Hello Node Api")  
}) 

app.get('/blog',(reg,res)=>{
    res.send("Hello blog")  
  }) 

app.listen(3000,()=>{
    console.log("Node Api app is running on port 3000")
})