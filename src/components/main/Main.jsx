import s from './Main.module.scss'
import blocks from '../../data/blocks'
import Block from '../block/Block'

const Main = () => {
  return (
    <div className={s.main}>
      <h1 className={s.title}>
        Roadmap frontend
      </h1>


      <div className={s.blocks}>
        {blocks.map(block => (
          <Block key={block.id} title={block.title} />
        ))}
      </div>
      
    </div>
  )
}

export default Main