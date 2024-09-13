import React, {  } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CalendarComponent = ({formatDate, onValue,handleDateChange}) => {
    
  return (
    <div className="flex items-center justify-center w-full p-6 ">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg shadow-xl bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">Select a Date</h2>
        <Calendar
          onChange={handleDateChange}
          value={onValue}
          className="border-none"
        />
        <p className="mt-4 text-lg text-center">
          Selected Date: <span className="font-medium text-indigo-600">{formatDate(onValue)}</span>
        </p>
      </div>
    </div>
  );
};

export default CalendarComponent;
