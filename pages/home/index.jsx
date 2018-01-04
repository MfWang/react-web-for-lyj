import React from 'react';
import './index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router';
const page6Settings = {
    dots: true,
    // dotsClass: classnames('slick-dots', 'page6-dots'),
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
};
const page7Settings = {
    dots: true,
    // dotsClass: classnames('slick-dots', 'page6-dots'),
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};
const slide = [
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-18584948a4fb3714?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-d6b0898a8c735b3c?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-dbebf0338d39cded.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-18584948a4fb3714?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    }
]
const hot = [
    {
        img: '',
        title: '聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题聊天室主题聊天室主题聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    }
];
const slide1 = [
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-18584948a4fb3714?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-d6b0898a8c735b3c?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-dbebf0338d39cded.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    },
    {
        url: '',
        img: 'https://upload-images.jianshu.io/upload_images/2544184-18584948a4fb3714?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '聊天室主题'
    }
]
const hot2 = [
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    }
];
const hot3 = [
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    },
    {
        img: '',
        title: '聊天室主题'
    }
];
class Home extends React.Component {
    render() {        
        return (    
            <div>
                <header>
                    <div className="info">
                        <h1>ReChat</h1>
                        <div className="user">
                            <img src="" alt="" />
                            <button>退出</button>
                        </div>
                    </div>
                    <div className="search_block">
                        <Link to="" className="ranking_list">排行榜</Link>
                        <input type="text" />
                        <button className="search">搜索</button>
                    </div>
                </header>
                <main>
                    <div className="theme">
                        <Slider
                            className="slide"
                            id="femometer__page6__banner"
                            {...page6Settings}
                            >
                            {
                                slide.map((item) => (
                                    <Link to="{item.url}" className="slide_item">
                                        <img src={item.img} alt=""/>
                                        <p>{item.title}</p>
                                    </Link>
                                ))
                            }
                        </Slider>
                        <ul className="theme_lists">
                            <li className="item group"><p>聊天室主题</p></li>
                            <li className="item group"><p>聊天室主题</p></li>
                            <li className="item group"><p>聊天室主题</p></li>
                            <li className="item"><p>聊天室主题</p></li>
                            <li className="item"><p>聊天室主题</p></li>
                            <li className="item"><p>聊天室主题</p></li>
                        </ul>
                    </div>
                    <div className="category">
                        <div className="left">
                            <div className="menu">
                                <button>更多 >></button>
                            </div>
                            <Slider
                                className="tab"
                                {...page7Settings}
                                >
                                <div>
                                    <ul className="list">
                                        {
                                            slide1.map((item, index) => (
                                                <li>
                                                    <Link href="" className="item">
                                                        <div className="item_info">
                                                            <p className="title">{item.title}</p>
                                                            <p>在线人数： 2000</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list">
                                        {
                                            hot.map((item, index) => (
                                                <li>
                                                    <Link href="" className="item">
                                                        <div className="item_info">
                                                            <p className="title">{item.title}</p>
                                                            <p>在线人数： 2000</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list">
                                        {
                                            hot.map((item, index) => (
                                                <li>
                                                    <Link href="" className="item">
                                                        <div className="item_info">
                                                            <p className="title">{item.title}</p>
                                                            <p>在线人数： 2000</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Slider>
                        </div>
                        <div className="hot">
                            <h3 className="title">新晋热门巴士</h3>
                            <ul className="top_lists">
                                {
                                    hot.map((item, index) => (
                                        <li>
                                            <Link to="" className="item">
                                                <span>{index + 1}</span>
                                                {
                                                    index === 0 &&
                                                    <img src={item.img} alt="" />
                                                }
                                                <p>{item.title}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button>查看更多</button>
                        </div>
                    </div>
                </main>
            </div>        
        )    
    }
}
//导出组件
export default Home;