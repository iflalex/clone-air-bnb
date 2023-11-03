import React from 'react'

export default function SearchBar():React.ReactElement {
  return (
    <div className='w-full grid grid-cols-[1fr,minmax(0px,max-content)] items-center pl-4 pr-4 gap-2'>
      <div className=' grid grid-cols-[minmax(0px,max-content),1fr] bg-white shadow-[0px_2px_12px_-5px_rgba(0,0,0,0.3)] items-center p-2 rounded-full'>
        <div className='h-6 w-6 flex justify-center items-center p-[1px]'>
          <img className='h-full' src={require('../../../assets/chercher.png')} alt="search icon" />
        </div>
        <div className='mr-2 ml-2'>
          <p className='text-[0.85rem] leading-[1] font-medium'>Destination</p>
          <p className='text-[9px]'>N'import... Une sem... Ajouter des voya...</p>
          
        </div>
      </div>
      <div style={{width:'30px', height:'30px', border:'1px solid rgba(0,0,0,0.3)', borderRadius:'100%', padding:'7px'}}>
        <img className='h-full rotate-90' src={require('../../../assets/egaliseur.png')} alt="preferences icon" />
      </div>
    </div>
  )
}
