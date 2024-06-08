
import React from 'react'
import "./eventStyle.css"

const UpcommingEvents = () => {
  return (
    <div>

      <div className="event-container-fluid">
        <h1 className="text-danger">
          <b>Upcoming Events</b>
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="event-card rounded-3">
              <img src="images/item3.jpg" alt="Event 1" />
              <h5 className="heding pt-3">Event 1: Summer Sale !</h5>
              <p className="prra m-2">Date: June 15th - 20th</p>
              <p className="prra m-2">
                Description: Get ready for our summer sale! Enjoy discounts on Women's
                favorite products.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event-card rounded-3">
              <img src="Imagee/wxz.jpeg" alt="Event 2" />
              <h5 className="heding pt-3">Event 2: New Product Launch</h5>
              <p className="prra m-2">Date: July 1st</p>
              <p className="prra m-2">
                Description: Join us for the launch of our new product line! Be the
                first to experience the latest technology.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="event-card rounded-3">
              <img src="images/rj.jpg" alt="Event 3" />
              <h5 className="heding pt-3 ">Event 3: Fiver &amp; UpWork </h5>
              <p className="prra m-2">Date: November 25th</p>
              <p className="prra m-2">
                Description: Don't miss out on our Fiver &amp; UpWork! Get exclusive
                deals on your favorite products.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UpcommingEvents