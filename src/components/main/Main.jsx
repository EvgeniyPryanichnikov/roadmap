import s from './Main.module.scss'
import blocks from '../../data/blocks'
import Block from '../block/Block'

const Main = () => {
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

      <div className={s.hardBlock}>
        <span className={s.title}>
          {`Концепции`}
        </span>
      </div>
      
    </div>
  )
}

export default Main