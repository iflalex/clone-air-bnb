import React from 'react'
import Logo from '@interfaces/Logo';
import { NavLink } from "react-router-dom";

export default function Footer():React.ReactElement {

  const logos: Logo[] = [
    {
      imgActive: require('../../assets/chercherActive.png'),
      img:require('../../assets/chercher.png'), 
      name:'Explorer'
    },
    {
      imgActive: require('../../assets/coeurActive.png'),
      img:require('../../assets/coeur.png'), 
      name:'Favoris'
    },
    {
      imgActive: require('../../assets/envoyerActive.png'),
      img:require('../../assets/envoyer.png'), 
      name:'Voyages'
    },
    {
      imgActive: require('../../assets/dialogueActive.png'),
      img:require('../../assets/dialogue.png'), 
      name:'Messages'
    },
    {
      imgActive: require('../../assets/profilActive.png'),
      img:require('../../assets/profil.png'), 
      name:'Profil'
    }
  ]

  return (
    <div className='pb-1.5 flex flex-col items-center border-t border-[lightgrey]'>
        <div className='flex items-center w-full justify-between pt-1.5 pb-4 pl-3 pr-3'>
          {
            logos.map((logo,index)=>{
              if(logo.name === 'Explorer' ){ 
                return <NavLink
                  to={`/`}
                  key={index}
                >
                  {({ isActive }) => (
                    <div className='flex flex-col items-center cursor-pointer'>
                      <img className="w-6 h-6" src={isActive ? logo.imgActive : logo.img} alt={logo.name} />
                      <div className='relative'>
                        <p className='text-xs opacity-0'>{logo.name}</p>
                        <p className={`text-xs absolute top-0 left-0 ${isActive ? 'text-red-500 font-medium' : 'text-black'}`}>{logo.name}</p>
                      </div>
                    </div>
                  )}
                </NavLink>;
              }
              if(logo.name === 'Profil' ){ 
                return <NavLink
                  to={`/${logo.name}`}
                  key={index}
                >
                  {({ isActive }) => (
                    <div className='flex flex-col items-center cursor-pointer'>
                      <img className="w-6 h-6" src={isActive ? logo.imgActive : logo.img} alt={logo.name} />
                      <div className='relative'>
                        <p className='text-xs opacity-0'>{logo.name}</p>
                        <p className={`text-xs absolute top-0 left-0 ${isActive ? 'text-red-500 font-medium' : 'text-black'}`}>{logo.name}</p>
                      </div>
                    </div>
                  )}
                </NavLink>;
              }
              if(logo.name === 'Voyages'){
                return <NavLink
                  to={`/${logo.name}`}
                  key={index}
                >
                  {({ isActive }) => (
                    <div className='flex flex-col items-center justify-between h-full cursor-pointer'>
                      <img className="w-5.5 h-5 rotate-[-90deg] mt-[2px]" src={isActive ? logo.imgActive : logo.img} alt={logo.name} />
                      <div className='relative mt-[1px]'>
                        <p className='text-xs opacity-0'>{logo.name}</p>
                        <p className={`text-xs absolute top-0 left-0 ${isActive ? 'text-red-500 font-medium' : 'text-black'}`}>{logo.name}</p>
                      </div>
                    </div>
                  )}
                </NavLink>
              }
              return <NavLink
                to={`/${logo.name}`}
                key={index}
              >
                {({ isActive }) => (
                  <div key={index} className='flex flex-col items-center justify-between h-full pt-[2px] gap-[1px] cursor-pointer'>
                    <img className="w-5 h-5" src={isActive ? logo.imgActive : logo.img} alt={logo.name} />
                    <div className='relative'>
                      <p className='text-xs opacity-0'>{logo.name}</p>
                      <p className={`text-xs absolute top-0 left-0 ${isActive ? 'text-red-500 font-medium' : 'text-black'}`}>{logo.name}</p>
                    </div>
                  </div>
                )}
              </NavLink>
            })
          }
        </div>
        <div className='w-28 h-1 bg-black rounded-full'/>
    </div>
  )
}
