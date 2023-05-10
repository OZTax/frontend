import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className="head_text text-left md:mt-32 md:pr-80 md:ml-10">
        We are a Columbian research institute and scientific consortium that is active in the fields of Originium,    
        <span className="head_text_grey"> biology and robotics with both a bright background involving ethical, 
        humane experiments and a grand ambition to become Terra's pioneer in space expedition.<br/>
        </span>
        <br/><br/>
        <Link href="https://arknights.fandom.com/wiki/Rhine_Lab" className="head_text_grey underline">
        Learn More
        </Link>
    </div>
  )
}

export default Introduction