import React, { useState, useEffect } from "react";
import axios from 'axios';
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

/*const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      },
    },
  },
  {
    id: 5,
    time: "4pm",
  },
];

*/

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });


  

  



  const setDay = day => setState({ ...state, day });
  //const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    const daysUrl = "http://localhost:8001/api/days";
    const appointUrl = "http://localhost:8001/api/appointments";
    const interviewUrl = "http://localhost:8001/api/interviewers";

    Promise.all([
      axios.get(daysUrl),
      axios.get(appointUrl),
      axios.get(interviewUrl),
    ]).then((all) => {
      const dayList = all[0].data
  
      const appointList = all[1].data

      const interviewerList = all[2].data
      
      const newDayList = dayList.map( x => {
        return x;
      })

      console.log("DAYLIST", dayList)
      console.log("NEWDAYLIST", newDayList)
    

      setState(prev => ({...prev, days: newDayList, appointments: appointList, interviewers: interviewerList }));
    
    });

  }, [])

  //console.log("STATE", state)
  const dailyAppointments = getAppointmentsForDay(state, state.day)

  

  
  //console.log("DAILY", dailyAppointments)

  return (
    <main className="layout">
      <section className="sidebar">
        {
          <div>
            <img
              className="sidebar--centered"
              src="images/logo.png"
              alt="Interview Scheduler"
            />
            <hr className="sidebar__separator sidebar--centered" />
            <nav className="sidebar__menu">
              <DayList days={state.days} value={state.day} onChange={setDay} />
            </nav>
            <img
              className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"
            />
          </div>
        }
      </section>
      <section className="schedule">


        {dailyAppointments.map((x) => {
          const interview = getInterview(state, x.interview)
          
          
          return (<Appointment  {...x} key={x.id} id={x.id} time={x.time} interview={interview} />
          )

})}


      </section>
    </main>
  );
}
