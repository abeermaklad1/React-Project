import React from "react";
import { Carousel } from "react-bootstrap";
import Content from '../components/Content';
import Search from '../components/Search'
import Footer from '../components/Footer'


export default function Slider() {
  return (
    <>
      <Carousel className=''  style={{height:'90vh'}}>
        <Carousel.Item  style={{}}>
          <img
            className="d-block w-100"
            src= {require("../assets/images/banner-15.png")}
            alt="First slide"
           style={{height:'80vh'}}
          />
          {/* <Carousel.Caption className="text-danger">
            <h3>First slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item >
        <Carousel.Item style={{}}>
          <img
            className="d-block w-100 "
            src={require("../assets/images/banner-16.png")}
            alt="Second slide"
            style={{height:'80vh'}}

          />

          {/* <Carousel.Caption className="text-danger">
            <h3>Second slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item style={{}}>
          <img
            className="d-block w-100"
            src= {require("../assets/images/banner-17.png")}
            alt="Third slide"
            style={{height:'80vh'}}

          />

          {/* <Carousel.Caption className="text-danger">
            <h3>Third slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <Content />
      <Search />
    </>
  );
}
