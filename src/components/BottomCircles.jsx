import React, { useState, useEffect } from 'react'



// const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh', // Set minimum height to the viewport height
// };


const BottomCircleStyle = {
    padding: 10,
    margin: 20,
    background: 'blue',
    borderRadius: "50%",
    width: 100,
    height: 100,
    flexDirection: 'row',
    color: 'white',
    textAlign: 'center',
};

function BottomCircles() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {


            const url = 'https://powerball.p.rapidapi.com/2023-01-02';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '67b12fec39mshf352d95625acd72p144b35jsn80a6721ddc4e',
                    'X-RapidAPI-Host': 'powerball.p.rapidapi.com'
                }
            };
            console.log('here2')
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                let tempArray = []
                for (const element in result.data) {
                    tempArray.push(result.data[element])
                }
                setData(tempArray)
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);


    return (
        <div className='bottom-container'>
            <div style={BottomCircleStyle} >
                {data[0].NumberSet}
            </div>
            
        </div>
    )


};

export default BottomCircles;