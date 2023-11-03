import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'

export default function Header():React.ReactElement {
  return (
    <div className='max-h-max flex flex-col'>
      <SearchBar/>
      <Menu/>
    </div>
  )
}
