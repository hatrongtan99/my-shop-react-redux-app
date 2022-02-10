import React from 'react'

const helmet = ({ title, children}) => {
    document.title = `Bad Habbit Store - ${title}`
  return (
    <>
        {children}
    </>
  )
}

export default helmet