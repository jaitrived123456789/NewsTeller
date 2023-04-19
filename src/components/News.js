import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor() {
    super();
    console.log("This is constructor")

    this.state = {

      articles: [],
      loading: false

    }

  }




  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6"
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsTeller - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}



        </div>

      </div>
    )
  }
}

export default News
