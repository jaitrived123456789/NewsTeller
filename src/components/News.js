import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false
    }

  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsTeller - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {

            <div className='col-md-4'  key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urltoToImage} newsurl={element.url} />
            </div>
          })}



        </div>

      </div>
    )
  }
}

export default News
