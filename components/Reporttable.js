import React from "react";

function Reporttable(props) {
  if (props.reports.length === 0) {
    return <h2 className="text-center">No Cookie Stand Available</h2>;
  }
  return (
    <table className="mx-auto w-3/4 bg-gray-200 ">
      <thead>
        <tr>
          <th>Location</th>
          {props.hours.map((hour) => {
            return <th key={Math.random()}>{hour}</th>;
          })}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {props.reports.map((store) => {
          return (
            <tr className="odd:bg-gray-500" key={Math.random()}>
              <td>{store.location}</td>
              {store.hourly_sale.map((sale) => {
                return <td>{sale}</td>;
              })}
              <td>100</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Reporttable;
