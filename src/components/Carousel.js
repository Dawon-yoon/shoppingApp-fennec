import React,{useState} from 'react';
import "../scss/Carousel.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Carousel = ({item}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentIndex((currentIndex - 1 + item.length) % item.length);
    }
    const handleNextImage = () => {
        setCurrentIndex((currentIndex + 1) % item.length);
    }
    const handleMoveImage = (index) => { 
        setCurrentIndex(index);
    }
  return (
      <div className='carousel'>
            {item.length > 1 && (
                <div>
                    <button className='prev' onClick={handlePrevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className='carousel-image'>
                        <img src={item[currentIndex]} alt='detail-image' />
                    </div>
                    <button className='next' onClick={handleNextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                    <div className='indicators'>
                        {item.map((image, index) => (
                            <button
                                key={index}
                                className={index === currentIndex ? 'active' : ''}
                                onClick={() => handleMoveImage(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
            {item.length === 1 && (
                <div className='carousel-image'>
                    <img src={item[0]} alt='detail-image' />
                </div>
            )}
        </div>
  )
}

export default Carousel