
$(document).ready(function() {
    
// TODO: this information needs to come from the database

const allTheEvents = [
    {
        title: 'timeslot taken',
        start: '2019-11-05T14:00:00',
        end: '2019-11-05T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-05T16:00:00',
        end: '2019-11-05T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-11-05T10:00:00',
        end: '2019-11-05T11:00:00'
    },   
    {
        title: 'timeslot taken',
        start: '2019-11-14T09:00:00',
        end: '2019-11-14T10:00:00'
    },     
    {
        title: 'timeslot taken',
        start: '2019-11-14T10:00:00',
        end: '2019-11-14T11:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-25T14:00:00',
        end: '2019-11-25T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-25T16:00:00',
        end: '2019-11-25T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-11-25T10:00:00',
        end: '2019-11-25T11:00:00'
    }
    ]


    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable

    // the dragable list
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim(),
          //   todo: get the duration-information from the selected tasks
          duration: '02:00',
          textColor: 'white',
          backgroundColor: 'black',
          editable: true,
          durationEditable: false,
          id: "myFix"
        }
      }
    });

    var calendarEl = document.getElementById('calendar');


    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
        header: {
        right: 'prev,next today', //positions the the prev/next button on the right 
        center: 'title', //sets the title of the month to center
        left: 'timeGridWeek,timeGridDay'
      },
      defaultView: 'timeGridWeek',
      firstDay: 1,
      slotDuration: '00:30', // 2 hours
      // defaultDate: '2018-02-16',
      navLinks: true, // click on day/week names to navigate views
    //   editable: false,
    //   eventLimit: true, // add "more" link when there are too many events in a day
      events: allTheEvents,
      
      eventOverlap: false, // to avoid overlapping
      businessHours: [
        {
          daysOfWeek: [ 1, 2, 3, 4 ], // Monday, Tuesday, Wednesday
          startTime: '08:00', // 8am
          endTime: '18:00' // 6pm
        },
        {
          daysOfWeek: [ 4, 5 ], // Thursday, Friday
          startTime: '08:00', // 10am
          endTime: '16:00' // 4pm
        }
      ],
      
    // the drop-function:  
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(arg) {
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        // const dateAppointment = arg.dateStr;

        console.log(arg.date);
        console.log(arg.dateStr);
        // console.log(calendarEl.getEventSources());
      },
      edit: function(arg) {
        console.log("edited");
      },
      eventClick: function(info) {
        alert('Event: ' + info.event.title);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
    
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      },
      nowIndicator: true,
    });

    $

    calendar.render();

});