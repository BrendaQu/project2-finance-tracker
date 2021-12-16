//Milton
import React from "react"

const Landing = () => {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={process.env.PUBLIC_URL + '/img/landing.jpeg'} class="d-block w-100" alt="Jumbotron Background"/>
                    <div class ="carousel-caption d-none d-md-block">
                    <h1>Finance Tracker</h1>
                    <p>Welcome to the greatest financing app in all of time and creation</p>
                    <br />
                    <p>If you are new here, you can register for an account up top.  Otherwise you can  just log in.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;