import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor() {
    super();
    console.log("This is constructor")

    this.state = {

      articles: [],
      loading: false,
      page: 1

    }

  }




  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=1&pageSize=20";
    try {
      let res = await fetch(url);
      let data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      let flag = 1;

    }

    else {

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page + 1}&pageSize=20`;

      let res = await fetch(url);
      let data = await res.json();


      this.setState({
        page: this.state.page + 1,
        articles: data.articles
      })

    }

  }


  handlePreviousClick = async () => {


    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page - 1}&pageSize=20`;

    let res = await fetch(url);
    let data = await res.json();



    this.setState({
      page: this.state.page - 1,
      articles: data.articles
    })
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page >= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button  type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
