import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "Scroll.in"
            },
            "author": "Simrin Sirur",
            "title": "Global warming can affect the ability of forests to suck carbon from atmosphere, shows study - Scroll.in",
            "description": "The findings by IIT-Bombay are significant given the emphasis on afforestation, especially in India, and the country’s net-zero ambitions.",
            "url": "https://scroll.in/article/1063017/global-warming-can-affect-the-ability-of-forests-to-suck-carbon-from-atmosphere-shows-study",
            "urlToImage": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/198049-mbabjnjvsy-1706709709.jpg",
            "publishedAt": "2024-02-03T16:30:00Z",
            "content": "Forests are considered the most effective and abundantly available carbon sinks, capable of storing and sequestering millions of tonnes of carbon dioxide from the atmosphere. A new study from India j… [+9130 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Mohun Bagan vs East Bengal LIVE ISL: Cleiton Scores As East Bengal Lead vs Mohun Bagan | Score 2-1 - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2luZGlhbi1zdXBlci1sZWFndWUvbW9odW4tYmFnYW4tdnMtZWFzdC1iZW5nYWwtbGl2ZS1pbmRpYW4tc3VwZXItbGVhZ3VlLTIwMjMtMjQtbGl2ZS11cGRhdGVzLTQ5ODU3MTjSAYIBaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaW5kaWFuLXN1cGVyLWxlYWd1ZS9tb2h1bi1iYWdhbi12cy1lYXN0LWJlbmdhbC1saXZlLWluZGlhbi1zdXBlci1sZWFndWUtMjAyMy0yNC1saXZlLXVwZGF0ZXMtNDk4NTcxOC9hbXAvMQ",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-02-03T15:51:47Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Rezaul H Laskar",
            "title": "Abhay Thakur set to be new envoy to Russia: Officials - Hindustan Times",
            "description": "Abhay Thakur is the officer on special duty for G20 and played a key role in negotiations during India’s presidency of the grouping of the world’s 20 largest economies | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/abhay-thakur-set-to-be-new-envoy-to-russiaofficials-101706974123270.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/India-s-envoy-to-Russia--Pavan-Kapoor--has-been-ap_1706974109959.jpg",
            "publishedAt": "2024-02-03T15:28:42Z",
            "content": "Senior diplomat Pavan Kapoor, currently Indias envoy to Russia, was on Saturday appointed the new secretary (west) in the external affairs ministry, while Jaideep Mazumdar, currently the ambassador t… [+3033 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "On Gyanvapi, Bageshwar Dham chief says, 'Certain that Shankar ji will emerge' - Hindustan Times",
            "description": "Dhirendra Shastri said Nandi ji has emerged at Gyanvapi and it is certain that Lord Shiv will also appear.  | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/on-gyanvapi-bageshwar-dham-chief-says-certain-that-shankar-ji-will-emerge-101706973301996.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/Gyanvapi_mandir_photo_vyas_ji_ka_tahkhana_1706973411464_1706973411714.jpg",
            "publishedAt": "2024-02-03T15:25:47Z",
            "content": "Bageshwar Dham chief or popularly known as 'sarkar', Dhirendra Shastri on Saturday said Nandi God has already emerged in Gyanvapi and it is certain that 'Shankar ji will also emerge'. \"If you are que… [+2467 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "India recorded over 14 lakh cancer cases in 2022 - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/news/national/telangana/india-recorded-over-14-lakh-cancer-cases-in-2022/article67808506.ece",
            "urlToImage": null,
            "publishedAt": "2024-02-03T15:13:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Don't over-hype his achievements and give him tags: Gambhir's razor-sharp warning after Yashasvi Jaiswal's double ton - Hindustan Times",
            "description": "After finishing unbeaten on 179 at the end of Day 1, he converted his overnight score to an epic 209 off 290 balls to power India to 396 | Cricket",
            "url": "https://www.hindustantimes.com/cricket/ind-vs-eng-2nd-test-dont-over-hype-his-achievements-give-him-tags-gautam-gambhir-warning-yashasvi-jaiswal-double-ton-101706969253120.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/gambhir_yas_1706969597955_1706969610041.jpg",
            "publishedAt": "2024-02-03T15:08:49Z",
            "content": "It was a record-breaking outing for two players, who combined to decimate England, albeit playing different roles. If it was Jasprit Bumrah with the ball, as he recorded his best-ever bowling figures… [+2176 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'Don't know what Stokes was thinking': Jasprit Bumrah on England skipper's puzzled reaction after dismiss - Times of India",
            "description": "Cricket News: Read about Jasprit Bumrah's remarkable performance in the second Test against England and how he left the England skipper bewildered with his magical deliveries. Find out more about Bumrah's bowling prowess and the impact he had on the match.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/dont-know-what-stokes-was-thinking-jasprit-bumrah-on-england-skippers-puzzled-reaction-after-dismissal/articleshow/107388900.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107388986,width-1070,height-580,imgsize-59238,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-03T14:32:00Z",
            "content": "2nd Test: Jaiswal 209, Bumrah six-for put India on top"
        }

    ]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        // console.log("Component DID Mount");
        let url = "https://newsapi.org/v2/top-headlines?country=In&apiKey=9ecce4700c874ac7affd6abb7ee9edf1&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("Previous Button Clicked");

        let url = `https://newsapi.org/v2/top-headlines?country=In&apiKey=9ecce4700c874ac7affd6abb7ee9edf1&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next Button Clicked");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=In&apiKey=9ecce4700c874ac7affd6abb7ee9edf1&page=${this.state.page + 1}&pageSize=18`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        // console.log("Rendered");
        return (
            <div className='container my-3'>
                <h2>Insiders News - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} style={{ display: 'flex' }}>
                            <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News