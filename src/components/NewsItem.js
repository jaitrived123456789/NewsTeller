import React, { Component } from 'react'


export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (

      <div className='card deck my-3 mx-3'>
        <div className="card gap-6">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{ left: '90%', zIndex: '1', }}>{source}</span>

          <img src={!imageUrl ? "http://www.elegalmetrology.jharkhand.gov.in/japnet/images/news.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div className="card-footer text-primary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}  </div>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem
