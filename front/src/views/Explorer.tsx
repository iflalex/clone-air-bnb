import React from 'react'
import Content from 'src/components/explorer/Content'
import Header from 'src/components/explorer/header/Header'

export default function Explorer():React.ReactElement {

  return (
    <div className='h-full flex flex-col'>
      <Header />
      <Content/>
    </div>
  )
}
