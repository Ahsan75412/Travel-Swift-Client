// import { format } from 'date-fns';
// import { useState } from 'react';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import BookingModal from '../../pages/HotelDetails/BookingModal';
// const Appointment = ({date , setDate}) => {

//     return (
//         <div>
//             <div className='border-4'>
//                 <DateRange
//                     rangeColors={['#F43F5E']}
//                     editableDateInputs={true}
//                     onChange={(item) => setDate([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={date}
//                     minDate={new Date()}
                    
//                 />
                 
//             </div>
           
//             <div>
//               <p>You reserved on {format(date[0].startDate, "MM/dd/yyyy")} to {format(
//                     date[0].endDate,
//                     "MM/dd/yyyy"
//                 )}</p>
//             </div>
//         </div>

//     );
// };

// export default Appointment;



import { format, differenceInDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const Appointment = ({ date, setDate }) => {
  const handleDateChange = (item) => {
    setDate([item.selection]);
  };

//   const getSelectedDays = () => {
//     if (date[0]) {
//       const startDate = date[0].startDate;
//       const endDate = date[0].endDate;
//       const days = differenceInDays(endDate, startDate) + 1; // Adding 1 to include the end date
//       return days;
//     }
//     return 0;
//   };

  return (
    <div>
      <div className='border-4'>
        <DateRange
          rangeColors={['#F43F5E']}
          editableDateInputs={true}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
      </div>

      <div>
        {/* <p>
          You reserved on {format(date[0].startDate, 'MM/dd/yyyy')} to{' '}
          {format(date[0].endDate, 'MM/dd/yyyy')}. and The selected range is{' '}
          {getSelectedDays()} days.
        </p> */}
      </div>
    </div>
  );
};

export default Appointment;
