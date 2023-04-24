import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,

    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    paseSize: PropTypes.number,

    category: PropTypes.string
  }

  capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }


  constructor(props) {
    super(props);
    console.log("This is constructor")

    this.state = {

      articles: [],
      loading: true,
      page: 1,
      totalResults: 0

    }
    document.title = `${this.capitalize(this.props.category)}-NewsTeller`
  }




  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=1&pageSize=${this.props.pageSize}`;
    try {
      this.setState({ loading: true });

      let res = await fetch(url);
      let data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let res = await fetch(url);
    let data = await res.json();



    this.setState({
      page: this.state.page,
      articles: data.articles,
      loading: false
    })
  }


  // handleNextClick = async () => {

  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews();

  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.paseSize))) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading:true});
  //   //   let res = await fetch(url);
  //   //   let data = await res.json();


  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: data.articles,
  //   //     loading: false
  //   //   })

  //   // }

  // }



  // handlePreviousClick = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews();

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true});

  //   // let res = await fetch(url);
  //   // let data = await res.json();



  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: data.articles,
  //   //   loading: false
  //   // })
  // }

  fetchMoreData = async() => { 
        this.setState({
        page: this.state.page + 1
      });
    
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ce2a9a1ca24c1196e4391f244db8e6&page=${this.state.page}`;
    // this.setState({ loading: true });

    let res = await fetch(url);
    let data = await res.json();



    this.setState({
      page: this.state.page,
      articles: this.state.articles.concat(data.articles)
      // loading: false
    })
    
  };

  render() {
    return (
      <>
        < h1 className="text-center " style={{ margin: '40px 0px' }}>
          NewsTeller - Top Headlines from {this.capitalize(this.props.category)}
        </h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>

          
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {

              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>


        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.paseSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
        </div> */}

         
      </>
    )
  }
}

export default News
