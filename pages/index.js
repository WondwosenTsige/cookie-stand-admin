import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Form from "../components/form";
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
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between p-3 bg-green-500 text-black-100">
        <h1 className="text-4xl">Cookide Stand Admin</h1>
        {/* <p className="text-xl">{ answeredQuestions.length } Question Answered</p> */}
      </header>
    </div>
  )
}
