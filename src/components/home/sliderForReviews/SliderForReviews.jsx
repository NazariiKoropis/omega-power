import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './SliderForReviews.module.scss'

export default function SliderForReviews({ reviewsData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  }

  function returnName(fullName) {
    const [firstName, lastName] = fullName.split(' ')
    return `${firstName} ${lastName[0]}.`
  }

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>Відгуки</h2>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className={styles.slideItem}>
            <h3 className={styles.reviewerName}>{returnName(review.name)}</h3>
            <span className={styles.reviewMark}>{review.mark}</span>
            <p className={styles.reviewText}>"{review.review}"</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
