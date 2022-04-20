import React from "react";
import { Container } from "react-bootstrap";
import {NavLink, Outlet} from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-light p-4 mb-3">
      <Container>
      <h2 style={{ color: "rgb(107, 164, 193 )" }} className="text-center">About</h2>;
        <div className="row">
          <div className="col-12">
            <div>
              <button className="btn btn-outline-info m-2">
              <NavLink style={{textDecoration: 'none'}} to="company">Resturant</NavLink>
              </button>
              <button className="btn btn-outline-info m-2">
              <NavLink  style={{textDecoration: 'none'}} to="features">Features</NavLink>
              </button>
            </div>
          </div>
          <div className="col-12">
              <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}

