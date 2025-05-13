import style from './feature.module.css';

// components/Testimonials/Testimonials.jsx
const Testimonials = () => {
    const testimonials = [
      { id: 1, rating: "★★★★★", name: "Juan", comment: "Sure I'll go again." },
      { id: 2, rating: "★★★★★", name: "Emilia", comment: "I love it." },
      { id: 3, rating: "★★★★★", name: "Ave", comment: "The best staff!" },
      { id: 4, rating: "★★★★★", name: "Jhon", comment: "Nice!" },
    ];

    return (
      <section className={style["testimonials-section"]}>
        <h2>Testimonials</h2>
        <div className={style["testimonials-grid"]}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={style["testimonial-card"]}>
              <div className={style["rating"]}>{testimonial.rating}</div>
              <div className={style["name"]}>{testimonial.name}</div>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Testimonials;