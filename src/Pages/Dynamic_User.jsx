import React from 'react'
import { useParams, useLocation, Navigate, useNavigate } from 'react-router-dom';

const Dynamic_User = () => {
    console.log("UseParams: ", useParams());
    const { slug } = useParams();


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

    const sepecific_User = user.filter(data => data.id == slug)

    console.log("sepecific_User : ", sepecific_User);

    const usedLocation = useLocation();

    // console.log("useLocation : ", useLocation());

    const navigateUser = useNavigate();
    
    console.log("navigateUser", navigateUser);
    




    return (
        <div>
            <h1>
                name = {sepecific_User[0].name}
            </h1>

            <h1>
                email = {sepecific_User[0].email}
            </h1>

            <h1>
                age = {sepecific_User[0].age}
            </h1>

            {usedLocation.pathname == "/user/3" &&
                (
                    <div>
                        <h1>Hello {sepecific_User[0].name}</h1>
                    </div>
                )
            }
            <div>
                <button onClick={ ()=> navigateUser('/')}>Go to home </button>
            </div>

        </div>
    )
}

export default Dynamic_User
