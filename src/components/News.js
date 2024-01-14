import React, { useEffect,useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {

 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
   
  

  const updateNews=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cca3f68b073e4aa9a6a0e55ecb4ef453&page=${page}&pageSize=${props.pageSize}`;

   
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);

  }
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`

    updateNews();
    // eslint-disable-next-line
  }, [page])
  
  // const componentDidMount=async()=> {
    // let url = `https://newsapiorg/v2/top-headlines?country=${propscountry}&category=${propscategory}&apiKey=cca3f68b073e4aa9a6a0e55ecb4ef453&page=1&pageSize=${propspageSize}`;
    // setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await datajson();
    // setState({
    //   articles: parsedDataarticles,
    //   totalResults: parsedDatatotalResults,
    //   loading: false,
    // });
  //   updateNews();
  // }
  

  // const handleNextClick = async () => {
    // if (
    //   !(statepage + 1 >
    //   Mathceil(statetotalResults / propspageSize))
    // ) {
    //   let url = `https://newsapiorg/v2/top-headlines?country=${propscountry}&category=${propscategory}&apiKey=cca3f68b073e4aa9a6a0e55ecb4ef453&page=${
    //     statepage + 1
    //   }&pageSize=${propspageSize}`;

    //   setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await datajson();
    //   setState({
    //     page: statepage + 1,
    //     articles: parsedDataarticles,
    //     totalResults: parsedDatatotalResults,
    //     loading: false,
    //   });
    // }

  
  //   setPage(page+1)
  //   updateNews();
  // };
  // const handlePrevClick = async () => {
    // let url = `https://newsapiorg/v2/top-headlines?country=${propscountry}&category=${propscategory}&apiKey=cca3f68b073e4aa9a6a0e55ecb4ef453&page= ${
    //   statepage - 1
    // }&pageSize=${propspageSize}`;
    // setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await datajson();
    // setState({
    //   page: statepage - 1,
    //   articles: parsedDataarticles,
    //   loading: false,
    // });

    
  //   setPage(page-1)
  //   updateNews();
  // };

  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 15 secs
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cca3f68b073e4aa9a6a0e55ecb4ef453&page=${page}&pageSize=${props.pageSize}`;

    setPage(page+1) 
    
     
  
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };

    return (
      <>
        <h1 className="text-center" style={{margin:'30px',marginTop:'80px'}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)} headlines</h1>
  
  {loading && <Spinner />}
  
  
  <InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length!==totalResults}
  loader={<Spinner/>}
>
<div className="container">
        <div className="row">
          {/*{!stateloading &&*/}
            {articles.map((element,index) => {
              return (
                // <div className="col-md-4 my-3" key={element.url}>
                <div className="col-md-4 my-3" key={`${element.url}_${index}`}>

                  <NewsItem
                    title={element.title ? element.title.slice(0, 35) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
                
              );
            })}
        </div>
        </div>
        
        </InfiniteScroll>
        
       
      </>
    );
  }


News.defaultProps={
  country:'in',
  pageSize:6,
  category:'general'
 

}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News;
