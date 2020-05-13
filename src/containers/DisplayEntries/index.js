import React from "react";
import { Table } from "reactstrap";
import Section from "../section";
import { data } from "../../../db.json";

const DisplayEntries = (props) => {
  const columns = ["Name", "Email", "Phone Number", "Start Date", "End Date"];

  return (
    <Section>
      <h1 className="section-title">Display Contact Form Entries</h1>

      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default DisplayEntries;
