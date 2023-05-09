import React from 'react'
import Link from 'next/link'

const Insights = () => {
  return (
    <div className="head_text text-left md:mt-32 md:pr-80 md:ml-10">
        We are the global leader in commercial real estate services and investments.    
        <span className="head_text_grey"> With services, insights and data that span every dimension of the industry,
        we create solutions for clients of every size,
        in every sector and across every geography.<br/>
        </span>
        <br/><br/>
        <Link href="/" className="head_text_grey underline">
        Learn More
        </Link>
    </div>
  )
}

export default Insights