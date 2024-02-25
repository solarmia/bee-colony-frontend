import { memo } from 'react'

type props = {
    xpos: number
    ypos: number
    img: any
}

const Hexagon = ({ xpos, ypos, img }: props) => {
    return (
        <div className={`hexagon absolute w-[100%] h-[100%] top-1/2 left-1/2 flex justify-center items-center hover:scale-[115%] transition-all hover:bg-[#ffde81] cursor-pointer`} style={{ translate: `${xpos}% ${ypos}%` }}>
            <div className='inner-hexagon '>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default memo(Hexagon)