import React, { useEffect, useState } from 'react'
import { myNews } from './news'
import './News.css'
import CircularProgress from '@mui/material/CircularProgress';

function Newshome() {
    const[news,setNews]=useState([])
    const[load,setLoad]=useState(true)
    useEffect(()=>{
        setLoad(true)
        myNews()
        .then(({data})=>{
            setNews(data)
            setLoad(false)
        })
    },[])
    const allnews=news?.news
    const myallNews=allnews?.map(({fullNewsDate,id,newsFirstImage,newsHeadline,newsSecondImage,newsSource,newsSpotlightFirstImage
    ,newsSpotlightSecondImage})=>{

      return(
        <div key={id}>
          <div>
            <div className='headline'>{newsHeadline}</div>
            <div className='date'>{fullNewsDate}</div>
            <div className='source'>{newsSource}</div>
            <div><img className='imgs' src={newsFirstImage} alt={newsSource}/></div>
            <div><img className='imgs' src={newsSecondImage} alt={newsSource}/></div>
            <div><img className='imgs' src={newsSpotlightFirstImage} alt={newsSource}/></div>
            <div><img className='imgs' src={newsSpotlightSecondImage} alt={newsSource}/></div>
          </div>
        </div>

      )
    })

    

  return (
    <div className='news'>
      
      <div>
        <div className='new'>
          <h2 className='title'>News</h2>
        </div>
        {load ? <CircularProgress color='success' className='circular'/> : 
        <div>
          {myallNews}
          </div>}
      </div>
    </div>
  )
}

export default Newshome