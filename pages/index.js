import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Reporttable from "../components/Reporttable";
import { hours } from "../data";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../reduxStore/countSlice";

export default function Home() {
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();

  const updateReport = (formObj) => {
    let result = calculate(formObj);
    let newReports = [...reports, result];
    console.log("Length: ", newReports.length);
    dispatch(changeCount(newReports.length));
    setReports(newReports);
  };

  const calculate = (obj) => {
    let result = {
      location: obj.location,
      hourly_sale: generateCookiePerHour(
        obj.minCustomers,
        obj.maxCustomers,
        obj.avgCookies
      ),
    };

    return result;
  };

  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHour(minCustomers, maxCustomers, avgCookies) {
    let cookieSaleEveryHour = [];
    for (var i = 0; i < 14; i++) {
      cookieSaleEveryHour.push(
        Math.round(generateRandomNum(minCustomers, maxCustomers) * avgCookies)
      );
    }
    return cookieSaleEveryHour;
  }

  return (
    <Layout>
      <div className="space-y-10">
        <Form updateReport={updateReport} />
        <Reporttable hours={hours} reports={reports} />
      </div>
    </Layout>
  );
}