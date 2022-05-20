import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <span className="badge bg-success" style={{ position: "absolute", right: "-20px", top: "-10px" }}>{!source ? "Unknown" : source}</span>
        <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2022/04/mobility-2022-zoox.jpg?w=764" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-success">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem