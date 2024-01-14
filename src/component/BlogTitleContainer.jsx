import React from 'react'
import bai from '../bai.jpg'
import blogimgcom from '../blogimgcom.png'
import { Link } from 'react-router-dom'
const BlogTitleContainer = () => {
    return (
        <>  
        <Link to={`/blog/id`}>
            <div className='blog_container'>
                <div className='author'>
                    <div className="author_img"><img src={bai} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">fatfish in JavaScript in Plain English</div>
                    <div className="author_date hev">Aug 12 2023</div>
                </div>
                <div className='blog_detail'>
                    <div className='bdp1'>
                        <h2 className='blog_title text-start'>Back-End & Web Development Trends For 2024</h2>
                        <h3 className='blog_para text-start'>By Mary Moore, copywriter at Shakuro The ever-shifting
                            landscape of digital innovation can feel like a relentless race,
                            a whirlwind of challenges and opportunities. Your pains as a developer are real — the</h3>
                    </div>
                    <div className="bdp2">
                        <img src={blogimgcom} className='img-fluid' width="300px" alt="" />
                    </div>
                </div>
                <div className='blog_tag'>
                    <div className="bt">
                        <h5 className='me-3'> <span class="rounded-pill cus_bg2 fw-normal badge text-dark px-4">Primary</span> </h5>
                        <h5 className='me-3'> <span class="rounded-pill cus_bg2 fw-normal badge text-dark px-4">Secondary</span> </h5>
                    </div>
                    <div className='bttime'><p className='text-secondary my-1 fs-6'>9 min read</p></div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default BlogTitleContainer