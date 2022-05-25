import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#192135]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'> Bonjour, je m'appelle </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Ramzy Merzougui </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> et je débute dans le développement web.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Etudiant à l'ETNA, je recherche une alternance pour poursuivre mon cursus, ce portfolio réalisé en React, vous permettra de voir les projets auquel j'ai participé et de savoir plus sur moi. Je prends le maximum de mon temps pour pouvoir finaliser mon portfolio et aussi mes projets en cours, mais vous aurez un apercu de mes capacités !</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Voir Projets 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                
                </button>
           </div>
        </div>

    </div>
  )
}

export default Home