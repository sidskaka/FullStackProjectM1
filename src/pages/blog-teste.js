import React, { Component } from 'react'
import '../style/style-blog.css'

class blogTeste extends Component {

    render() {
        return (
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-4" >
                            <div class="item-box-blog">
                                <div className="item-box-blog-image">
                                
                                    <div className="item-box-blog-date bg-blue-ui white"> 
                                        <span class="mon">Augu 01</span> 
                                    </div>
                                
                                    <figure> 
                                        <img alt="" src="https://cdn.pixabay.com/photo/2017/02/08/14/25/computer-2048983_960_720.jpg" /> 
                                    </figure>
                                
                                </div>
                                <div className="item-box-blog-body">
                            
                                    <div className="item-box-blog-heading">
                                        <a href="#" tabindex="0">
                                            <h5>News Title</h5>
                                        </a>
                                    </div>
                                    <div className="item-box-blog-data" style={{ padding: 'px 15px'}}>
                                        <p>
                                            <i className="fa fa-user-o"></i> 
                                            Admin, 
                                            <i className="fa fa-comments-o"></i> 
                                            Comments(3)
                                        </p>
                                    </div>
                                    <div className="item-box-blog-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.
                                        </p>
                                    </div>
                                    <div className="mt"> 
                                        <a href="#" tabindex="0" className="btn bg-blue-ui white read">
                                            read more
                                        </a>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default blogTeste
