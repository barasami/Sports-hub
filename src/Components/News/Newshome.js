import React, { useEffect, useState } from 'react'
import { myNews } from './news'

function Newshome() {
    const[news,setNews]=useState([])
    useEffect(()=>{
        myNews()
        .then(({data})=>{
            setNews(data)
        })
    },[])

    const myalNews=news?.map(({Title,Image,NewsLink,PublisherDate,PublisherLogo,PublisherName})=>{
      return(
        <div key={Title}>
          <div>
            <div>
              {Title}
            </div>
            <div>
              {PublisherDate}
            </div>
            <div>
              <img src={PublisherLogo} alt={PublisherName}/> <span>{PublisherName}</span>
            </div>
            <div>
              <img src={Image} alt={PublisherName}/>
            </div>
            <div>
              <a href={NewsLink}>Link</a>
            </div>
          </div>
        </div>
      )
    })

  return (
    <div>
      <h2>News</h2>
      <div>
        {myalNews}
      </div>
    </div>
  )
}

export default Newshome