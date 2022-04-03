import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      page: 1
    }
}

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b43e9942b64b4deea3465ac1f04b8694&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});
 
  }

  handleNextClick= async ()=>{

    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b43e9942b64b4deea3465ac1f04b8694&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    }) 
  }
  }
  handlePrevClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b43e9942b64b4deea3465ac1f04b8694&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    }) 
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>
        {
          return <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} key={element.key} url={element.url}/>}
        
        )}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className='btn btn-secondary' onClick={this.handlePrevClick}>&larr; prev</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-secondary' onClick={this.handleNextClick}>next &rarr;</button>
        </div>
        </div>
    
    )
  }
}

export default News
