import { useState } from 'react'
import s from './Element.module.scss'
import { ReactComponent as CloseIcon } from '../../icons/x-close.svg'
import descriptions from '../../data/descriptions.json'

const Element = ({title, marker}) => {
  const actualDescription = descriptions.filter(item => item.parent === title)
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => setIsShow(prev => !prev)

  return (
    <div className={s.themeContainer}>
      <div className={marker ? s.themeHard : s.theme} onClick={handleShow}>
        {title}
      </div>

      {isShow && <div className={s.description}>
        <div className={s.top}>
          <CloseIcon className={s.close} onClick={handleShow}/>
        </div>
        
        <div className={s.content}>
          <h3 className={s.title} dangerouslySetInnerHTML={{__html:actualDescription[0].title}}>
          </h3>

          <p className={s.text} dangerouslySetInnerHTML={{__html:actualDescription[0].text}}>
          </p>
        </div>

      </div>}
    </div>
  )
}

export default Element