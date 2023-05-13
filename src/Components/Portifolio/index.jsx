import { Section2,Portifolio} from "./styled";


import p1 from '../../assets/Images/Projets/p1.jpg';
import p2 from '../../assets/Images/Projets/p2.jpg';
import p3 from '../../assets/Images/Projets/p3.jpg';
import p4 from '../../assets/Images/Projets/p4.jpg';
import p5 from '../../assets/Images/Projets/p5.jpg';
import p6 from '../../assets/Images/Projets/p6.jpg';
import p7 from '../../assets/Images/Projets/p7.jpg';
import p8 from '../../assets/Images/Projets/p8.jpg';




const Portfolio = () => {

  const portfolioImages = [
      {id:1, src: p1 },
      {id:2, src: p2 },
      {id:3, src: p3 },
      {id:4, src: p4 },
      {id:5, src: p5 },
      {id:6, src: p6 },
      {id:7, src: p7 },
      {id:8, src: p8 }
  ]

  return (
    <Section2>
      <h1>Portifólio</h1>
        <Portifolio>
          {portfolioImages.map((image) => (
          <img key={image.id} src={image.src} alt='portifolio' className="portfolio-image"/>))}
        </Portifolio>
           
    </Section2>
  );
};

export default Portfolio;





