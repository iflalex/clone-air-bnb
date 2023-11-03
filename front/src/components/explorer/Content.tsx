import React from 'react'

export default function Content(): React.ReactElement {

  let images = [require('../../assets/maison_campagne.jpg'),require('../../assets/coeur_explorer.png'),require('../../assets/maison_campagne_2.jpg')]

  return (
    <div className='flex-1 overflow-hidden relative mt-[4.1rem]'>
      <div className='absolute top-0 left-0 w-full min-h-full flex flex-col items-center pt-5 pb-5 pl-7 pr-7 gap-5'>
        {/* 1 */}
        <div className='w-full text-xs'>
          <div className='w-full h-[11rem] border mb-2 relative rounded-md overflow-hidden'>
              <img src={`${images[0]}`} className="z-0 w-full h-full absolute top-0 left-0 object-cover" alt="picture location" />
              <div className='w-full absolute bottom-2 left-0 flex justify-center gap-1'>
                <div className='w-[6px] h-[6px] border-[1px] bg-[white] rounded-full'></div>
                <div className='w-[6px] h-[6px] border-[1px] bg-[lightgrey] rounded-full'></div>
                <div className='w-[6px] h-[6px] border-[1px] bg-[lightgrey] rounded-full'></div>
              </div>
              <img src={`${images[1]}`} className="w-4 h-4 opacity-50 absolute top-3 right-3" alt="picture heart fav location" />
          </div>
          <div className='flex justify-between'>
            <p className='font-medium'>Lanaken, Belgique</p>
            <p>★ 4,82</p>
          </div>
          <p>Particulier</p>
          <p>24-29 sept.</p>
          <p className='mt-1'><span className='font-bold'>127 €</span> par nuit</p>
        </div>
        {/* 2 */}
        <div className='w-full h-[11rem] border mb-2 relative rounded-md overflow-hidden'>
          <img src={`${images[2]}`} className="z-0 w-full h-full absolute top-0 left-0 object-cover" alt="picture location" />
          <img src={`${images[1]}`} className="w-4 h-4 opacity-50 absolute top-3 right-3" alt="picture heart fav location" />
        </div>
      </div>
    </div>
  )
}
