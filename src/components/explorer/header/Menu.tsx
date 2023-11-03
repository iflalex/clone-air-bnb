import React from 'react'
import Logo from '@interfaces/Logo'

export default function Menu():React.ReactElement {

  const logos: Logo[] = [
    {
      img:require('../../../assets/campagne.png'), 
      name:'Campagne'
    },
    {
      img:require('../../../assets/jeu.png'), 
      name:'Wow !'
    },
    {
      img:require('../../../assets/fenetre.png'), 
      name:'Avec vue'
    },
    {
      img:require('../../../assets/bateauMaison.png'), 
      name:'Sur l\'eau'
    },
    {
      img:require('../../../assets/art.png'), 
      name:'Art et créativité'
    }
  ]

  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 flex min-w-max gap-[17px] border-b pt-3 pl-4 pb-3'>
        {
          logos.map((logo,index)=>{
            if(logo.name === 'Campagne'){
              return <div key={index} className='flex flex-col items-center gap-1 relative'>
                <img className='h-5' src={logo.img} alt={logo.name} />
                <p className='text-[0.7rem] font-bold'>{logo.name}</p>
                <div className='h-[3px] bg-black w-full absolute bottom-[-0.75rem] rounded-full' />
              </div>
            }
            return <div key={index} className='flex flex-col items-center gap-1'>
              <img className='h-5' src={logo.img} alt={logo.name} />
              <p className='text-[0.7rem] font-medium'>{logo.name}</p>
            </div>
          })  
        }
      </div>
    </div>
  )
}
