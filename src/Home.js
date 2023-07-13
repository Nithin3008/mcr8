import React, { useContext } from "react";
import { DataContext, meets } from "./data";
import { useNavigate } from "react-router";
export const Home1 = () => {
  const { setSort, sortBy } = useContext(DataContext);
  const nav = useNavigate();
  let meetsData = meets.meetups;
  function setOption(event) {
    setSort(event.target.value);
  }
  if (sortBy == "Online") {
    meetsData = meets.meetups.filter((val) => val.eventType == sortBy);
    console.log(meetsData);
  } else if (sortBy == "Offline") {
    meetsData = meets.meetups.filter((val) => val.eventType == "Offline");
  } else {
    meetsData = meets.meetups;
  }

  return (
    <div>
      <section className="flex justify-between items-center p-4">
        <h1 className="text-3xl text-pink-600">Meetup</h1>
        <div>
          <input placeholder="search for event"></input>
        </div>
      </section>
      <hr></hr>
      <section>
        <section className="flex justify-between items-center p-7">
          <h1 className="text-3xl">Meetup Events</h1>
          <div>
            <select onClick={(e) => setOption(e)}>
              <option>Select event type</option>
              <option>Offline</option>
              <option>Online</option>
            </select>
          </div>
        </section>
        <section className="flex flex-wrap gap-8 justify-center">
          {meetsData.map((val) => (
            <ul
              className="p-8 list-none"
              onClick={() => nav(`/Event1/${val.id}`)}
            >
              <li>
                <img className="h-32 rounded-md" src={val.eventThumbnail}></img>
                <li>
                  <li>
                    Date: {new Date(val.eventStartTime).toLocaleDateString()}
                  </li>
                  <li className="text-xl font-semibold">{val.hostedBy}</li>
                  <li>{val.title}</li>
                </li>
              </li>
            </ul>
          ))}
        </section>
      </section>
    </div>
  );
};
