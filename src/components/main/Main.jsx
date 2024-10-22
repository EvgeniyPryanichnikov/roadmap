import { useState } from 'react'
import s from './Main.module.scss'
import blocks from '../../data/blocks'
import Block from '../block/Block'
import Element from '../element/Element'
import hardBlocks from '../../data/hard-blocks'

const Main = () => {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => setIsShow(prev => !prev)
  return (
    <div className={s.main}>
      <div className={s.mainTitle}>
        FRONTEND 2024
      </div>


      <div className={s.blocks}>
        {blocks.map(block => (
          <Block key={block.id} title={block.title} />
        ))}
      </div>

      <div className={s.hardBlocksContainer}>
        <div className={s.hardBlock} onClick={handleShow}>
          <span className={s.title}>
            {`Основные концепции`}
          </span>
        </div>

        {isShow && <div className={s.hardBlocks}>
            {hardBlocks.map(block => (
              <Element key={block.id} title={block.title} marker={block.marker}/>
            ))}
        </div>}
      </div>
    </div>
  )
}

export default Main