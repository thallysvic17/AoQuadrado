
import {CarouselContainer} from './styled'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


import img2 from '../../assets/images/Carousel-img/img2.jpg';
import img1 from '../../assets/images/Carousel-img/img1.jpg';
import img3 from '../../assets/images/Carousel-img/img3.jpg';
import img4 from '../../assets/images/Carousel-img/img4.jpg';




const Carousel = () => {
  
  const slides = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    
    
  };
  

  
  
  return (

    

    <CarouselContainer>

       <Slider  {...settings}>
      {slides.map((slide, index) => (
        <div className='slides' key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>

    </CarouselContainer>
  );
};

export default Carousel;