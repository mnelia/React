import React from 'react'
const productos = [
    { id: 1,foto: "./public/img/gorro.jpg", categoria: "Accesory", name: "Gorro" , price: 20 }
]


export const getFetch = new Promise((resolve)=>{

    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})