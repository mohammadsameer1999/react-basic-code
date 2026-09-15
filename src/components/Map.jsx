import React from 'react'
import './Map.css'

const Map = () => {

    const data = ["Alu", "Piyaz", "Chicken", "Mutton"];

    const phoneDescriptions = [
        {
            id : 1,
            image : "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61Brhn4WBIL._SL1500_.jpg",
            model : "Apple iPhone 16 Pro Max"


        },

         {
            id : 2,
            image : "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/616-Eh2FbPL._SL1500_.jpg",
            model : "Apple iPhone 17 Pro Max"


        },

        {
            id : 3,
            image : "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71Cw9fFnAML._SX679_.jpg",
            model : "Apple iPhone 18 Pro Max"


        },
    ]

    return (
        <>
            {/* {data.map((element,index) => 
            <div key={index}>
                <h1>{element}</h1>
            </div> )} */}

            <div className="phone-list">
                {phoneDescriptions.map((data) => (
                    <div className="phone-card" key={data.id}>
                        <img src={data.image} alt={data.model} />
                        <h1>{data.model}</h1>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Map
