import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  const actionMovieList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  return (
    <div className="prime-video-container">
      <img
        className="title-logo"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MovieSlider
        comedyMoviesList={comedyMoviesList}
        actionMoviesList={actionMovieList}
      />
    </div>
  )
}

export default PrimeVideo
