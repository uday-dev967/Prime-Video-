import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  console.log(movieDetails)
  const {thumbnailUrl, categoryId, videoUrl} = movieDetails
  return (
    <>
      <div className="movie-container">
        <Popup
          modal
          trigger={
            <button className="button" type="button">
              <img src={thumbnailUrl} alt="thumbnail" className="image" />
            </button>
          }
        >
          {close => (
            <div className="viedo-pop-container">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
              <div className="player">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  )
}
export default MovieItem
