import React from "react";
import Card from "./Card";
import { useCounter } from "../hooks/useCounter";
// import ll from '../assets/images'
export default function Content() {
  let { counter, increaseHandler, dncreaseHandler } = useCounter();
  return (
    <div className=" container text-center">
      <h2 style={{ color: "rgb(107, 164, 193 )" }} className="mb-5">
        Our Products
      </h2>
      {/* <h1>Counter: {counter}</h1> */}
      <div className="row  d-flex align-items-center justify-content-center">
        <div className="col-3">
          <Card title="Product 1" btnTitle="Link 1">
            <div className="">
              <img
                src={require("../assets/images/thumbnail-12.jpg")}
                className="w-50 h-50"
                alt=""
              />
            </div>
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 1" btnTitle="Link 2">
            <img
              src={require("../assets/images/thumbnail-10.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 3" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-11.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 4" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-7.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 4" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-4.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 4" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-3.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 4" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-2.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>

        <div className="col-3">
          <Card title="Product 4" btnTitle="Link 3">
            <img
              src={require("../assets/images/thumbnail-1.jpg")}
              className="w-50 h-50"
              alt=""
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
