import React from 'react'

const About = () => {
  return (
    <div name ="about" className='w-full h-screen bg-[#404c73] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>A propos de moi</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Anciennement professeur particulier de mathématiques et agent administratif en pharmacie, prochainement développeur chez vous (?)</p>
                    </div>
                    <div>
                        <p>J'ai repris l'informatique en septembre par passion de manière sérieuse, et je n'ai sans cesse acquis des compétences, en très peu de temps, j'ai appris à coder des sites e-commerce, app mobile, et j'en passe. Mais le plus important pour moi reste la logique et la réflexion d'un développeur qui commence à prendre forme, et je souhaite l'améliorer en trouvant un poste d'alternance et poursuivre mon cursus. Je possède aussi des qualités importantes en dehors de la technique, mon travail en pharmacie pendant la pandémie m'a appris à être compréhensif, altruiste et aussi engagé et adroit dans mon travail. Maintenant je recherche simplement à travailler dans un domaine passionant qui est le développement Web.</p>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default About