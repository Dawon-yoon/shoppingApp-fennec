import React from 'react';
import "../scss/Home.scss";
import { useSelector } from 'react-redux';

const Home = () => {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  return (
    <div>
      <div className='home-main'>
      <div className='home-image-wrapper'>
          <img className='pc-image' src='/img/main_PC_2.jpeg' alt='main-image' />
          <img className='mobie-image' src='/img/main_MOBILE_2.jpeg' alt='main-image'/>
        </div>
        { !isSidebarOpen && (<div className='home-video-wrapper'>
          <iframe
            title='fennec-video'
          src='https://player.vimeo.com/video/956858788?h=b6aabb3f61?autoplay=1&amp;muted=1&amp;loop=1&amp;title=0&amp;background=1'></iframe>
      </div>)}
      </div>
    </div>
    
  )
}

export default Home