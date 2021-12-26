import React from 'react'
import fotoUrl from './img/europaEste.jpg'
import fotoUrls from './img/roma.jpg'
import fotoUrlx from './img/japon.jfif'
import fotoUrlz from './img/Kenya.jfif'

const productos = [
    { id: 1,foto: fotoUrl, categoria: "Travel", name: "Europa del Este", price: "USD 1100" },
    { id: 2, foto: fotoUrls, categoria: "Travel", name: "Europa Occidental", price: "USD 1300" },
    { id: 3, foto: fotoUrlx, categoria: "Travel", name: "Japon", price: "USD 1650" },
    { id: 4, foto: fotoUrlz, categoria: "Travel", name: "Knya y Tanzania", price: "USD 1780" }
]


export const getFetch = new Promise((resolve)=>{

    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})