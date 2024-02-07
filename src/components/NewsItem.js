import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '85%' }}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://images.cnbctv18.com/wp-content/uploads/2019/09/3d1bf24078a10a5b1751a8ae8c942a3d-1019x573.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem