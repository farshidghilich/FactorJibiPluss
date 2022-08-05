import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
// import '../../assets/plugins/fullcalendar/fullcalendar.min.css';

const eventsd = [
    {
        title: 'All Day Event',
        start: '2018-07-01',
        className: 'bg-info',
    },
    {
        title: 'Long Event',
        start: '2018-07-07',
        end: '2018-07-10',
        className: 'bg-danger'
    },
    {
        id: 999,
        title: 'Product Event',
        start: '2018-09-09T03:00:00',
        end: '2018-09-09T10:00:00',
        className: 'bg-cyan'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: '2018-10-23T16:00:00',
        className: 'bg-azura'
    },
    {
        title: 'Conference',
        start: '2018-09-19',
        end: '2018-08-20',
        className: 'bg-green'
    },
    {
        title: 'Meeting',
        start: '2018-09-13T08:30:00',
        end: '2018-09-13T17:30:00',
        className: 'bg-red'
    },
    {
        title: 'Lunch',
        start: '2018-08-12T12:00:00',
        className: 'bg-blush'
    },
    {
        title: 'Meeting with Clients',
        start: '2018-09-18T14:30:00',
        className: 'bg-red'
    },
    {
        title: 'Happy Hour',
        start: '2018-09-013T17:30:00',
        className: 'bg-pink'
    },
    {
        title: 'Dinner with Boss',
        start: '2018-09-11T20:00:00',
        className: 'bg-orange'
    },
    {
        title: 'Outing with Friends',
        start: '2018-09-10T10:30:00',
        end: '2018-09-10 T12:30:00',
        className: 'bg-indigo'
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-09-28',
        className: 'bg-blue'
    }
]
const headerdata = {
    left: 'title', // you can add today btn
    center: '',
    right: 'month, agendaWeek, listWeek, prev, next', // you can add agendaDay btn
}
class Fullcalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: "",
        }
    }
    render() {
        return (
            <div id="calender">
                <FullCalendar
                    id="calendar"
                    header={headerdata}
                    defaultDate='2018-09-12'
                    droppable={true}
                    contentHeight='auto'
                    editable={true}
                    // droppable={true}
                    eventLimit={true} // allow "more" link when too many events
                    // selectable={true}
                    events={eventsd}
                />
            </div>
        );
    }
}

export default Fullcalender;
