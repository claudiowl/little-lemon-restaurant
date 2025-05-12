import style from './feature.module.css';
import  aboutImage1  from '../../assets/images/restauranfood.jpg';
import  aboutImage2  from '../../assets/images/Mario and Adrian b.jpg';


const About = () => {
    return (
      <section id="about-section" className={style["about-section"]}>
        <div className={style["about-content"]}>
          <div className={style["about-text"]}>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant, focused on 
              traditional recipes served with a modern twist. Our chefs bring years 
              of experience and passion to every dish, using locally-sourced 
              ingredients to create authentic flavors.
            </p>
          </div>
          <div className={style["about-images"]}>
            <img 
              src={aboutImage1}
              alt="Chefs preparing food"
              className={style["about-img-1"]}/>
             <img 
              src={aboutImage2}
              alt="Restaurant interior"
              className={style["about-img-2"]}
            /> 
          </div>
        </div>
      </section>
    );
  };
  export default About;