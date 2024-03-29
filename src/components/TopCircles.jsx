import React, { useState, useEffect } from 'react'

const RepeatedItem = ({ FirstNumber, SecondNumber, ThirdNumber, FourthNumber, FifthNumber, PowerBall }) => {
    return (
        <div className='top-circles-numbers'>
            <div>{FirstNumber}</div>
            <div>{SecondNumber}</div>
            <div>{ThirdNumber}</div>
            <div>{FourthNumber}</div>
            <div>{FifthNumber}</div>
            <div>{PowerBall}</div>
        </div>
    )
}

const topContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
     textAlign: 'center'
}

const topCircleStyle = {
    padding: 10,
    margin: 20,
    background: 'blue',
    borderRadius: "50%",
    width: 100,
    height: 100,
    flexDirection: 'row',
    color: 'white',
   
};

function TopCircles() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const url = 'https://powerball.p.rapidapi.com/latest';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '67b12fec39mshf352d95625acd72p144b35jsn80a6721ddc4e',
                    'X-RapidAPI-Host': 'powerball.p.rapidapi.com'
                }
            };

            console.log('here1');
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                let tempArray = []
                for (const element in result.data) {
                    tempArray.push(result.data[element])
                }
                setData(tempArray);
                console.log(result)
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, []);

    return (
        <div style={topContainerStyle}>
            {data.map((item, index) => (
                <div className='circle-row' key= {index} >
                    <div style= {topCircleStyle}><RepeatedItem />{item.FirstNumber}</div>
                    <div style= {topCircleStyle}><RepeatedItem />{item.SecondNumber}</div>
                    <div style= {topCircleStyle}><RepeatedItem />{item.ThirdNumber}</div>
                    <div style= {topCircleStyle}><RepeatedItem />{item.FourthNumber}</div>
                    <div style= {topCircleStyle}><RepeatedItem />{item.FifthNumber}</div>
                    <div style= {topCircleStyle}><RepeatedItem />{item.PowerBall}</div>
                </div>
                
            ))}
        </div>
    )
};

export default TopCircles;