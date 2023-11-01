
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const Appointment = ({ date, setDate }) => {
  const handleDateChange = (item) => {
    setDate([item.selection]);
  };



  return (
    <div>
      <div className=''>
        <DateRange
          // rangeColors={['#F43F5E']}
          rangeColors={['#6563FF']}
          editableDateInputs={true}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
      </div>

    </div>
  );
};

export default Appointment;
