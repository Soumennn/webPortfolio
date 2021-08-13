import { useState } from 'react';
import './works.scss';

function Works() {

    let [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "Web Applictaions",
            desc:
                " Full Stack Development (React, NodeJS, Next.Js, MongoDb, Firebase, etc)",
            img: 
                "https://cdn.dribbble.com/users/3210711/screenshots/14998403/media/48fc30c5471a2f8f22b7f78108fa4d92.jpg?compress=1&resize=1200x900",
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Mobile Applications",
            desc:
                "Mobile Development using React, Node.Js, etc",
            img:
                "https://troymobility.com/wp-content/uploads/2020/10/Slider-Just-Mobile1.png",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Web Designing",
            desc:
                " Responsive designs using Bootstrap, Tailwind, Sass, etc ",
            img:
                "https://static.highsolutions.pl/uploads/uploaded/blog/portfolio_update_isom_D3U7R.png",
        }
    ];

    const carousalFunc = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide = -1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id='works'>
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p> {d.desc}
                                    </p>
                                    {/* <span></span> */}
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => carousalFunc("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => carousalFunc()}
            />

        </div>
    );
}

export default Works
