import React from 'react'

const Filter = () => {

    const person = [
        {
            id: 1,
            name: "sameer",
            active: true
        },

         {
            id: 2,
            name: "vishal",
            active: false
        },

        {
            id: 3,
            name: "Amit",
            active: true
        },
    ]
    // const active_Person = person.filter(data=> data.active);
    // console.log("active_Person: ",active_Person);
    
  return (
    <>
    {
        person.filter(data => data.active).map((item) =>(
            <div key={item.id}>

                <h2>{item.name}</h2>

            </div>
        ))
    }
    </>
  )
}

export default Filter
