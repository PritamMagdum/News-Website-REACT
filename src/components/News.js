import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    render() {
        return (
            <div className='container'>
                <h2>Insiders News - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="This is simple demo news!" imageUrl="https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/vijay_1706959839203_1706959839522.jpg" url="https://www.hindustantimes.com/entertainment/bollywood/vijay-varma-says-he-cried-watching-12th-fail-101706959315956.html" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="This is simple demo news!" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="This is simple demo news!" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News