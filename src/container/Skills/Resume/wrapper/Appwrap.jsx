import React from 'react'
import '../style.scss'

const Appwrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container1 ${classNames}`}>{/*app__container*/}
      <div className='app__wrapper1 app__flex1'>{/*className='app__wrapper app__flex'*/}
      <Component/>
      </div>
    </div>
  )
}

export default Appwrap
