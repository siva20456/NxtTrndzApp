import './index.css'

const FiltersGroup = ({
  categoryOptions,
  ratingsList,
  updateSearch,
  updateCategory,
  updateRating,
  clearFilters,
}) => {
  console.log(categoryOptions)

  const searcher = e => {
    const {value} = e.target
    // updateSearch(value)
    console.log(e.key)
    if (e.key === 'Enter') {
      updateSearch(value)
    }
  }

  const catter = id => {
    console.log(id)
    updateCategory(id)
  }

  const ratter = id => {
    console.log(id)
    updateRating(id)
  }

  const clearer = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <input
        type="search"
        placeholder="Search"
        className="input"
        onKeyDown={searcher}
      />
      <h1 className="hed">Category</h1>
      <ul className="cat-cont">
        {categoryOptions.map(e => {
          console.log(e)
          return (
            <li className="item" key={e.categoryId}>
              <button
                className="cat-btn"
                type="button"
                onClick={() => catter(e.categoryId)}
              >
                <p>{e.name}</p>
              </button>
            </li>
          )
        })}
      </ul>
      <h1 className="hed">Rating</h1>
      <ul className="cat-cont">
        {ratingsList.map(e => {
          console.log(e)
          return (
            <li className="item" key={e.ratingId}>
              <button
                className="cat-btn"
                type="button"
                onClick={() => ratter(e.ratingId)}
              >
                <img
                  src={e.imageUrl}
                  alt={`rating ${e.ratingId}`}
                  className="star-img"
                />
                <p className="para">& up</p>
              </button>
            </li>
          )
        })}
      </ul>
      <button className="clear-btn" onClick={clearer} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
