import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

const MovieSlider = props => {
  const {actionMoviesList, comedyMoviesList} = props
  console.log(actionMoviesList, comedyMoviesList)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <div className="movie-slider-container">
        <h1 className="heading">Action Movies</h1>
        <Slider {...settings}>
          {actionMoviesList.map(each => (
            <MovieItem key={each.id} movieDetails={each} />
          ))}
        </Slider>
      </div>
      <div className="movie-slider-container">
        <h1 className="heading">Comedy Movies</h1>
        <Slider {...settings}>
          {comedyMoviesList.map(each => (
            <MovieItem key={each.id} movieDetails={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MovieSlider
