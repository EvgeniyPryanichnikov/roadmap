import { useState } from 'react'
import s from './Block.module.scss'
import themes from '../../data/elements'
import Element from '../element/Element'

const Block = ({title}) => {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => {
    setIsShow(prev => !prev)
    window.navigator.vibrate(1000);
  }
  const actualThemes = themes.filter(item => item.block === title)

  return (
    <div className={s.blockContainer}>
      <div className={s.block} onClick={handleShow}>
        <span className={s.title}>
          {title}
        </span>
      </div>

      {actualThemes.length > 0 && isShow && <div className={s.themes}>
        {actualThemes.map(item => (
          <Element key={item.id} title={item.title} />
        ))}
      </div>}
    </div> 
  )
}

export default Block