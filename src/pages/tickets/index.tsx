import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

import React, { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import Event from '../../components/eventPhotoName';
import Footer from '../../components/footer';
import Head from '../../components/header';
import { useDocumentTitle } from '../../utils';

const loadingStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '24px',
};
function Tickets() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [events, setEvents] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = (date: Date) => {
    setEndDate(date);
    setLoading(true);
    setEvents(false);
    const t = setTimeout(() => {
      setEvents(true);
      setLoading(false);
    }, 1500); // emulate the async
    return () => clearTimeout(t);
  };
  useEffect(() => {
    if (endDate <= startDate) {
      setEndDate(addDays(startDate, 1));
    }
  }, [startDate]);
  useEffect(() => {
    query(new Date());
  }, []);
  useDocumentTitle('Tickets|VGN', false);
  return (
    <div className="tickets">
      <div className="maximum-body">
        <Head />
        <div className="logincart">
          <button type="button" className="login">
            Login
          </button>
          <button type="submit" className="cart">
            Cart
          </button>
        </div>
        <div className="notice">
          <div>
            VGN Members, login to receive discounts on all VGN exhibitions and
            programs. Not a member? Join today.
          </div>
          <div>
            A $4.50 transaction fee applies for online purchases (excluding free
            events and donations). Terms and conditions
          </div>
        </div>
        <div className="dateselector">
          <DatePicker
            className="startdate"
            selected={startDate}
            minDate={addDays(new Date(), 1)}
            maxDate={addDays(new Date(), 30)}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
          />
          <span>to</span>
          <DatePicker
            className="enddate"
            selected={endDate}
            minDate={addDays(startDate, 1)}
            maxDate={addDays(new Date(), 30)}
            onChange={query}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <div className="res">
          {loading ? (
            <div className="loading" style={loadingStyle}>
              Loading
            </div>
          ) : undefined}
          {events ? (
            <Event
              imgUrl="https://www.ngv.vic.gov.au/wp-content/uploads/2021/07/Chanel_TNEW.jpg"
              title="Gabrielle Chanel. Fashion Manifesto"
            />
          ) : undefined}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tickets;
