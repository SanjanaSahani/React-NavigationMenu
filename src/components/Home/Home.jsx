import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            <div className='flex  justify-center items-center flex-wrap mt-12 '>
              <img className='h-[400px]' src="https://img.freepik.com/premium-photo/drawing-bunch-flowers-with-leaves-flowers-generative-ai_899870-47931.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699920000&semt=ais" alt="" />
               <h1 className='text-4xl text-center mt-32 text-orange-700 font-bold'>Home page</h1>
            </div>


        </div>
    );
}
