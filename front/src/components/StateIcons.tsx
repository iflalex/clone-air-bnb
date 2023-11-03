import React from 'react'

export default function StateIcons():React.ReactElement {
  return (
    <div className="grid grid-cols-[1fr,minmax(0px,max-content),1fr] items-end mb-2">
        <p className="text-xs font-medium text-center">08:00</p>
        <div className="h-6 w-32 bg-black rounded-b-xl" />
        <div className="flex justify-center gap-1 items-center">
            <img className="w-[15px] h-3" src={require('../assets/signal.png')} alt="state icons" />
            <img className="w-[15px] h-3" src={require('../assets/wifi.png')} alt="state icons" />
            <img className="w-[15px] h-4" src={require('../assets/battery.png')} alt="state icons" />
        </div>
    </div>
  )
}
