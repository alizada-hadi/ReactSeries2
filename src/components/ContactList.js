import React from 'react'
import Contact from './Contact'
const ContactList = () => {
    return (
        <section class="text-gray-600 body-font">
            <h1 className='text-4xl mt-4 ml-40'>Product List</h1>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                <Contact img="https://dummyimage.com/421x261" name="Product One" price="30" />
                <Contact img="https://dummyimage.com/422x262" name="Product Two" price="40" />
                <Contact img="https://dummyimage.com/423x263" name="Product Three" price="50" />
                <Contact img="https://dummyimage.com/424x264" name="Product Four" price="60" />
                <Contact img="https://dummyimage.com/425x265" name="Product Five" price="70" />
                <Contact img="https://dummyimage.com/427x267" name="Product Six" price="80" />
                <Contact img="https://dummyimage.com/428x268" name="Product Seven" price="90" />
                <Contact img="https://dummyimage.com/421x261" name="Product Eeight" price="100" />
                
            
                </div>
            </div>
        </section>
    )
}
export default ContactList