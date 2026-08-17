import React from 'react'
import { useParams } from "react-router-dom"

const WatchMovie = () => {
    const {slug} =useParams()
  return (
    <iframe
  src={`https://player.videasy.net/movie/${slug}`}
  className='h-screen w-screen'
  frameborder="0"
  allowFullScreen
  allow="encrypted-media"
></iframe>
  )
}

export default WatchMovie
