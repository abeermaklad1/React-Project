import React from "react";
import {Card} from 'react-bootstrap';

export default function Note(props) {
  let { title, des } = props;
  return (
        <card border="primary" className=" border border-info col-4 m-2 bg-light bg-success bg-opacity-10  p-3 rounded-2 ">
           <img
            src={require("../assets/images/banner-6.png")}
            className="w-100 mb-2"
            alt=""
          />
          <h4 style={{color: 'rgb(107, 164, 193 )'}} className="">{title}</h4>
          <p>{des}</p>
          <p>{des}</p>
         
          <button className="btn btn-outline-primary">Save Topic</button>
        </card>
//         <Card border="success" style={{ width: '18rem' }}>
//     <Card.Header>Header</Card.Header>
//     <Card.Body>
//       <Card.Title>Success Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </Card.Text>
//     </Card.Body>
//   </Card>
  );
}
