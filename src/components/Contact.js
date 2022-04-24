import React, { Component } from 'react'

const Contact = (props) => {
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.img} />
                </a>
                <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{props.name}</h2>
                <p class="mt-1">${props.price}</p>
                </div>
        </div>
    )
}


export default Contact