import React, { useEffect , useState, useSyncExternalStore} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) =>{

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults , setTotalResults] = useState(0)

// document.title = `${this.capitalize(props.category)}-NewsTeller`


  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  const  updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    this.setState({ loading: true });

    let res = await fetch(url);
    let data = await res.json();
    props.setProgress(50);
    setArticles(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)



   
    props.setProgress(100);

  }

  const fetchMoreData = async () => { 
        setPage(page+1)
    
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    // this.setState({ loading: true });

    let res = await fetch(url);
    let data = await res.json();
    setArticles(articles.concat(data.articles))
    setTotalResults(data.totalResults)


  };

  
    return (
      <>
        < h1 className="text-center " style={{ margin: '40px 0px' }}>
          NewsTeller - Top Headlines from {capitalize(props.category)}
        </h1>
        {/* {loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>

          
          <div className='row'>
            {!loading && articles.map((element) => {

              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>


        </InfiniteScroll>


         
      </>
    )
  
}


News.defaultProps = {
  country: 'in',
  pageSize: 8,

  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  paseSize: PropTypes.number,

  category: PropTypes.string
}

export default News
