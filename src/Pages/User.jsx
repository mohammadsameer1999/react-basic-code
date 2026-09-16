import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user = [
        {
            id: 1,
            name: "Amit",
            email: "amit@gmial.com",
            age: 25
        },

        {
            id: 2,
            name: "Vishal",
            email: "vishal@gmial.com",
            age: 28
        },

        {
            id: 3,
            name: "Hitesh",
            email: "hitesh@gmial.com",
            age: 34
        },

        {
            id: 4,
            name: "Ankit",
            email: "ankit@gmial.com",
            age: 22
        },
    ]
    return (
        <>
            <div>
                {user.map((data) =>
                    <div keys={data.id}>
                        <Link to={ `/user/${data.id}`}><h1>
                            {data.name}
                        </h1> </Link> </div>)}
            </div>
        </>
    )
}

export default User
