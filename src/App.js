import React from 'react'
import RemoveBg from './views/removebg/RemoveBg'

const App = () => {
    return (
        <main className='min-h-screen container grid place-items-center relative mx-auto sm:p-8 p-4'>
            <div className='absolute -z-10 top-30 left-0 right-0'>
                <h1 style={{ lineHeight: '0.8' }} className='md:text-[25rem] text-[15rem] break-words font-extrabold  text-gray-50'>COLLABO AI</h1>
            </div>

            <div>
                <RemoveBg />
            </div>
        </main>
    )
}

export default App