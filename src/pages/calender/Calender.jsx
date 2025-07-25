import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { formatDate } from "@fullcalendar/core";
import { useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Stack } from "@mui/material";
import NamePage from "../../component/NamePage";



function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )}
  
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "All-day event",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Timed event",
      start: todayStr + "T12:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }

const Calender = () => {
  // const [weekendsVisible,setWeekendsVisible] =useState(true) 
   const [currentEvents, setCrrentEvents] = useState([]);
//   const handleWeekendsToggle = () => {
// setWeekendsVisible(!weekendsVisible);
//   }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }
  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = (events) => {
setCrrentEvents(events);
  }





  return (
  <>
   <NamePage title={"CALENDER"} subTitle={undefined}/>
    <Stack sx={{height:"100%",width:"100%"}} direction={"row"} className="demo-app">
      
      <div style={{width:"25%"}} className="demo-app-sidebar">
        {/* <div className="demo-app-sidebar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div> */}
        {/* <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div> */}
        <div className="demo-app-sidebar-section">
          <h2 style={{textAlign:'center'}}>All Events ({currentEvents.length})</h2>
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
      <div style={{width:"100%"}} className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          // weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </Stack>
  </>
 
  );
};

export default Calender;
