import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "antd";
import { AddTicket } from "../../Components/AddTicket/AddTicket";
import { ListTickets } from "../../Components/ListTicket/ListTickets";
import dayjs from "dayjs";

export interface Ticket {
  key?: number;
  name: string;
  class: string;
  date: any;
  price: string;
}

function Home() {
  const storeData = JSON.parse(localStorage.getItem("dataKey") || "[]");
  const [data, setData] = useState<Ticket[]>(storeData);
  const [form] = Form.useForm();

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);

  const addTicket = (newTicket: Ticket) => {
    let key = data.length;
    newTicket = { ...newTicket, key };
    setData((data) => [...data, newTicket]);
  };

  const editTicket = (editTicket: Ticket) => {
    let newData = [...data];
    newData.map((ele) => {
      if (ele.key === editTicket.key) {
        ele.name = editTicket.name;
        ele.class = editTicket.class;
        ele.date = editTicket.date;
        ele.price = editTicket.price;
      }
    });
    setData(newData);
  };

  const deleteTicket = (deleteTicket: Ticket) => {
    setData(data.filter((ele) => ele.key !== deleteTicket.key));
  };

  return (
    <div style={{ width: "1200px", margin: "auto" }} className="App">
      <Row>
        <Col span={10}>
          <AddTicket
            action="Add Ticket"
            addTicket={addTicket}
            ticket={{
              name: "",
              class: "Vip class",
              date: dayjs(),
              price: "10.000.000",
            }}
            editTicket={() => {}}
            form={form}
          />
        </Col>
        <Col span={14}>
          <ListTickets data={data} delete={deleteTicket} edit={editTicket} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
