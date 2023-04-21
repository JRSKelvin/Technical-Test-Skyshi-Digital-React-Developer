import React from 'react'

const NavbarComponent = () => {
  return (
    <React.Fragment>
      <div className="bg-sky-500">
        <header data-cy="header-background" className="layout flex items-center h-16 md:h-24">
          <h1 data-cy="header-title" className="font-bold text-2xl leading-9 text-white">
            TO DO LIST APP
          </h1>
        </header>
      </div>
    </React.Fragment>
  )
}

export default NavbarComponent
