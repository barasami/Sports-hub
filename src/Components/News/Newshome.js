import React, { useEffect, useState } from 'react'
import { myNews } from './news'
import './News.css'

function Newshome() {
    const[news,setNews]=useState([])
    useEffect(()=>{
        myNews()
        .then(({data})=>{
            setNews(data)
        })
    },[])
    const allnews=news?.news
    const myallNews=allnews?.map(({fullNewsDate,id,newsFirstImage,newsHeadline,newsSecondImage,newsSource,newsSpotlightFirstImage
    ,newsSpotlightSecondImage})=>{

      return(
        <div key={id}>

          <div>
            <div>{newsHeadline}</div>
            <div>{fullNewsDate}</div>
            <div>{newsSource}</div>
            <div><img src={newsFirstImage} alt={newsSource}/></div>
            <div><img src={newsSecondImage} alt={newsSource}/></div>
            <div><img src={newsSpotlightFirstImage} alt={newsSource}/></div>
            <div><img src={newsSpotlightSecondImage} alt={newsSource}/></div>
          </div>
        </div>

      )
    })

    

  return (
    <div className='news'>
      <h2 className='title'>News</h2>
      <div>
        {myallNews}
      </div>
    </div>
  )
}

export default Newshome