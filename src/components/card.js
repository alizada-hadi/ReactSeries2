import React from 'react'
import image from '../images/gem.jpeg'

export default function Card(){
    return (
        <div class="max-w-xs rounded-lg overflow-hidden shadow-md mx-5 mb-4 mt-3">
            <img class="w-full h-80" src={image} alt="Sunset in the mountains" />
            <div class="px-6 py-2">
                <div class="font-bold text-xl">Gymnastic</div>
                
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}