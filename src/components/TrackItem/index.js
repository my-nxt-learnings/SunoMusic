import './index.css'

const TrackItem = props => {
  const {deleteItem, eachItem} = props
  const {id, imageUrl, name, genre, duration} = eachItem
  const clickButton = () => {
    deleteItem(id)
  }
  return (
    <div className="card">
      <div className="image-text">
        <img src={imageUrl} alt="track" className="image" />
        <div className="text">
          <h1>{name}</h1>
          <p>{genre}</p>
        </div>
      </div>
      <div className="image-text">
        <p>{duration}</p>
        <button
          type="button"
          onClick={clickButton}
          data-testid="delete"
          className="text-buton"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TrackItem
