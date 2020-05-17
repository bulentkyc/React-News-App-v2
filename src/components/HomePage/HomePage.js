import React, { Component } from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { isTemplateElement } from '../../../node_modules/@babel/types';
import axios from 'axios';

export class HomePage extends Component {

    

    state = {
        data:
        [
            {
                urlToImage:"https://www.nj.com/resizer/ewOeGU5IVwJgJ0_NXptqTfUN1M8=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OEFHMGVTFNCNVBXNJQADDHCSRM.jpg",
                title: "Test 1",
                description: "Test 1 Content"
            },
            {
                urlToImage:"https://static.politico.com/45/f9/b6bbbc1e4c0fa6bd3059d4875548/cuomo-corona-brief.jpg",
                title: "Test 2",
                description: "Test 2 Content"
            }
        ],
        activeNewIndex: 0,
        newsDetail: null
    }

    componentDidMount() {
        console.log(this.props.category)


        const urlBase = 'https://newsapi.org/v2/top-headlines?';
        const country = this.props.country!==null?`country=${this.props.country}&`:'country=us&';
        const urlApi = 'apiKey=78961d7c864d4c77a95f173e437d7af1';
        const category = this.props.category!==null?`category=${this.props.category}&`:'';

        const url = urlBase + country + category + urlApi;
            
        console.log(url)
            
            axios.get(url)
            .then(result=>{
                console.log(result);
                this.setState({data:result.data.articles});
                
            })
            .catch(err=>console.log(err));
            console.log('[HomePage]: componentDidMount is done');
    }

    

    componentDidUpdate() {
        console.log('[HomePage]: componentDidUpdate started');
        const i = this.state.activeNewIndex;
        console.log('i:'+ i)
        console.log('[HomePage]: componentDidUpdate is done');
    }

    render() {
        console.log('[HomePage]: render is done');
        /* 
        // destructuring
        const {urlToImage,title,description} = item; 
        urlToImage=item.urlToImage;
        title= utem.title;
        description = item.description; 
        */

        /* 
        // spread operator
        const urlToImage = {...item}  
        */

        

        const updateActiveNewIndex = (index) => {
            console.log('before update state/','current state index:' + this.state.activeNewIndex, 'coming  index:' +index);
            this.setState({activeNewIndex:index});
            
        }
        
        console.log('after update state/','current state index:' + this.state.activeNewIndex);

        const news = this.state.data.map((item, i)=>{
            return(
                <NewsCard
                    click={()=>updateActiveNewIndex(i)}
                    width='18rem'
                    {...item}
                />
            );
        });
        
        console.log(this.state.activeNewIndex);
        const i = this.state.activeNewIndex;

        const visitUrlHandler = () => {
            window.location.href = this.state.data[i].url;
        }
        
        return (
            <div>
                <div className="col-md-4 col-sm-6 vh-100 bg-success float-left bg-light">
                <NewsCard
                    click = {visitUrlHandler}
                    className = "w-100"
                    additionClass="border-0 bg-light"
                    width="100"
                    urlToImage ={this.state.data[i].urlToImage}
                    title ={this.state.data[i].title}
                    description ={this.state.data[i].content}
                />

                </div>

                <div className="row p-3 col-md-8 col-sm-6 float-left overflow-auto vh-100">
                    {news}
                </div>
                
            </div>
        )
    }
}

export default HomePage