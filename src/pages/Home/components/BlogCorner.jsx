import React from 'react'
import "./blogcorner.css"
const BlogCorner = () => {
    return (
        <div className='blogcorner'>
            <h1>טיפים לעזר</h1>
            <div className="blogcorner-div">
                <div className="blogcorner-card-wrapper">
                    <div className="blogcorner-card">
                        <img src={require(`../../../images/blogpic.png`)} alt="" />
                        <h3>Looking for a job?</h3>
                        <p>Looking for a job can be complicated and we are here to help</p>
                        <div className="show-more">
                            <button>קרא עוד</button>
                        </div>
                    </div>
                </div>


                <div className="blogcorner-card-wrapper">
                    <div className="blogcorner-card">
                        <img src={require(`../../../images/blogpic.png`)} alt="" />
                        <h3>Looking for a job?</h3>
                        <p>Looking for a job can be complicated and we are here to help</p>
                        <div className="show-more">
                            <button>קרא עוד</button>
                        </div>
                    </div>
                </div>

                <div className="blogcorner-card-wrapper">
                    <div className="blogcorner-card">
                        <img src={require(`../../../images/blogpic.png`)} alt="" />
                        <h3>Looking for a job?</h3>
                        <p>Looking for a job can be complicated and we are here to help</p>
                        <div className="show-more">
                            <button>קרא עוד</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BlogCorner