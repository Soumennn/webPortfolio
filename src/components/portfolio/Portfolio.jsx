import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

import { 
    
    featuredPorfolio,
    webPortfolio,
    designPortfolio, 
    mobilePortfolio, 
    upcomingPortfolio,

} from '../../data';





function Portfolio() {

    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web Apps',
        },
        {
            id: 'mobile',
            title: 'Smartphone Apps',
        },
        {
            id: 'design',
            title: 'Design',
        },
        {
            id: 'upcoming',
            title: 'Upcoming Projects '
        }


    ];

    useEffect(()=> {
        switch (selected) {
            case "featured" : 
                setData(featuredPorfolio);
                break;
            case "web" :
                setData(webPortfolio);
                break;
            case "mobile" :
                setData(mobilePortfolio);
                break;
            case "design" :
                setData(designPortfolio);
                break;
            case "upcoming" :
                setData(upcomingPortfolio);
                break;
            default :
                setData(featuredPorfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id='portfolio'>
            <h1> Portfolio</h1>
            <ul>
                {list.map((item) => (

                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />

                ))}
            </ul>

            <div className="container">

                {data.map((d)=> (
                    <div className="item">
                        <img src={d.img} alt="" >
                        
                        </img>
                        {/* <h3>{d.title}</h3> */}
                        <a href={d.url} target="_blank">{d.title}</a>
                    </div>
                ))}
                
            </div>

        </div>
    );
}

export default Portfolio
