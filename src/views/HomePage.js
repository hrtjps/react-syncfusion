import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const HomePage = () => {
  const data = [{
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2020, 3, 5, 10, 0),
      EndTime: new Date(2020, 3, 5, 12, 30),
      IsAllDay: false,
      Status: 'Completed',
      Priority: 'High'
  }];
  return (
    <>
      <section>
        <h1>Scheduler</h1>
        <ScheduleComponent selectedDate={new Date(2020, 3, 5)} eventSettings={{ dataSource: data,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>;
      </section>
    </>
  );
};

export default HomePage;