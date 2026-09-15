import React from 'react'

const Events = () => {

    const showOnClickEvents = () => {

        alert("Alerts Messages: hey Apple new phone is launch here please click Here!")
    }

    const bg_white = () => {

        if (document.body.style.backgroundColor === "white") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }

        // const bg_Dark = () => {
        //     document.body.style.backgroundColor = "black";

        //     document.body.style.color = "white";

        

        

    }

    let count = 0;
        console.log("Counter Before Value : ", count);
        let counters = (value) => {



            count = value;

            alert("This is count valued is Here " + value)


            console.log("Counter after Value : ", count);


        };

    return (
        <>
            <h1>Events is a action to every website</h1>

            <button onClick={showOnClickEvents}>Click this</button>

            <button onClick={bg_white}>Change background button</button>

            {/* <button onClick={bg_Dark}>Change background button in onClick</button> */}

            <button onClick={() => counters(20)}>Change value Click button</button>




        </>
    )
}

export default Events
