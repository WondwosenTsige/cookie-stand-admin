import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import ReportTable from './ReportTable';
import { changeCount } from '../redux/countSlice';
import { hours } from '../data.js';

function Main() {
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();

  const updateReport = (formObj) => {
    let result = calculate(formObj);
    let newReports = [...reports, result];
    dispatch(changeCount(newReports.length));
    setReports(newReports);
  };

  const calculate = (obj) => {
    const result = {
      location: obj.location,
      hourly_sale: generateCookiePerHour(obj.minCustomers, obj.maxCustomers, obj.avgCookies),
    };
    return result;
  };

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateCookiePerHour = (minCustomers, maxCustomers, avgCookies) => {
    const cookieSaleEveryHour = [];
    for (let i = 0; i < 14; i++) {
      cookieSaleEveryHour.push(generateRandomNum(minCustomers, maxCustomers) * avgCookies);
    }
    return cookieSaleEveryHour;
  };

  return (
    <div>
      <Form updateReport={updateReport} />
      <ReportTable hours={hours} reports={reports} />
    </div>
  );
}

export default Main;
