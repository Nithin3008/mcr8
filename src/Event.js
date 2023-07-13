import React, { useState } from "react";
import { meets } from "./data";
import { useParams } from "react-router";
export const Event1 = () => {
  const { eventId } = useParams();
  const meetEvent = meets.meetups.find((val) => val.id === eventId);
  const [showRsvp, setShow] = useState(false);
  const [changeRsvp, setChange] = useState("Rsvp");
  function setRsvp(event) {
    event.target.innerText = "Already Rsvp";
  }
  console.log(eventId, meetEvent);
  return (
    <div>
      <div
        style={{ display: showRsvp ? "block" : "none" }}
        className="RsvpShow"
      >
        <div>
          <h2>Complete your RSVP</h2>
          <p>Fill in your personal Information</p>
          <p>Name</p>
          <input placeholder="name"></input>
          <p>Email</p>
          <input placeholder="email"></input>
          <p>{meetEvent.eventType == "Online" ? "event" : null}</p>
          <button
            onClick={() => setShow(!setRsvp)}
            className=" bg-red-500 w-20 text-xl text-white p-2 rounded mt-5"
          >
            RSVP
          </button>
        </div>
      </div>
      <section className="flex justify-around items-center p-4">
        <h1 className="text-3xl text-pink-600">Meetup</h1>
        <div>
          <input placeholder="search for event"></input>
        </div>
      </section>
      <hr></hr>
      <section className="flex justify-around mt-10">
        <div
          style={{ width: "500px" }}
          className="flex flex-col items-start bas"
        >
          <h1 className="text-3xl font-medium">{meetEvent.title}</h1>
          Hosted By:
          <p>{meetEvent.hostedBy}</p>
          <img style={{ height: "250px" }} src={meetEvent.eventThumbnail}></img>
          <h2 className="text-xl font-medium ">Details:</h2>
          <p>{meetEvent.eventDescription}</p>
          <h2 className="text-xl font-medium ">Additional Information:</h2>
          <p>
            <span>Dress Code</span>: {meetEvent.additionalInformation.dressCode}
          </p>
          <p>
            <span>Age Restrictions</span>:{" "}
            {meetEvent.additionalInformation.ageRestrictions}
          </p>
          <h2 className="text-xl font-medium">Event Tags: </h2>
          <div>
            <p>marketing</p>
            <p>digital</p>
          </div>
        </div>
        <div>
          <div className="bg-stone-300 p-3 rounded">
            <div className="flex items-center gap-5">
              <p>Time:</p>
              <div>
                <p>
                  Start:
                  {new Date(meetEvent.eventStartTime).toLocaleDateString() +
                    "   " +
                    new Date(meetEvent.eventStartTime).toLocaleTimeString()}
                </p>
                <p>
                  to End:
                  {new Date(meetEvent.eventEndTime).toLocaleDateString() +
                    "   " +
                    new Date(meetEvent.eventEndTime).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 gap-3">
              <p>Address:</p>
              <div>
                <p>{meetEvent.location}</p>
                <p>{meetEvent.address}</p>
              </div>
            </div>
            <p>
              {" "}
              {parseInt(meetEvent.price) > 0
                ? "Price:" + meetEvent.price
                : null}
            </p>
          </div>
          <h2 className="text-xl font-medium mt-4 ">Speakers</h2>
          <div className="flex justify-around mt-5 gap-5">
            {meetEvent.speakers.map((val) => (
              <ul className="flex flex-col items-center bg-stone-300 gap-3 w-40 p-3 rounded">
                <img
                  style={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "100%",
                  }}
                  src={val.image}
                ></img>
                <div>
                  <li>{val.name}</li>
                  <li>{val.designation}</li>
                </div>
              </ul>
            ))}
          </div>
          <button
            onClick={(e) => {
              setShow(!showRsvp);
              setChange("Already Rsvp");
            }}
            className=" bg-red-500 w-50 text-xl text-white p-2 rounded mt-5"
          >
            {changeRsvp}
          </button>
        </div>
      </section>
    </div>
  );
};
