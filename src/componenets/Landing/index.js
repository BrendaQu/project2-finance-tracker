//Milton
import React from "react"

const Landing = () => {

    return (
        // <div class="jumbotron jumbotron-fluid">
        //     <div class="container">
        //         <h1 class="display-4">Finance Manager</h1>
        //         <p class="lead">This is mostly just a place holder for now, but you can click the login button to do stuff once we get some functionality going</p>
        //     </div>
        // </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={process.env.PUBLIC_URL + '/img/landing.jpeg'} class="d-block w-100"/>
                    <div class ="carousel-caption d-none d-md-block">
                    <h1>Finance Manager</h1>
                    <p>This is mostly just a place holder for now, but you can click the login button to do stuff once we get some functionality going</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;