import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '20rem' }}>
                    <img src={!imageUrl ? "https://images.cnbctv18.com/wp-content/uploads/2019/09/3d1bf24078a10a5b1751a8ae8c942a3d-1019x573.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='_' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem