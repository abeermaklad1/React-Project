import React from 'react';

export default function Company() {
    return(
        <div className="container my-5">
                <div className="row">
                    <div className="col-6 ">
                        <img src={require('../assets/images/banner-8.png')} className="img-fluid rounded" alt="" style={{ height: '100%' }} />
                    </div>
                    <div className="col-6"  >
                        <h3 style={{ color: "rgb(107, 164, 193 )" }} className="pb-3">About Resturant </h3>
                        <p style={{ fontSize: 20, lineHeight: 1.5 }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            There are many but the majority have suffered alteration in some form, by injecte variations of passages of Lorem Ipsum available.
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            There are many but the majority have suffered alteration in some form, by injecte variations of passages of Lorem Ipsum available.
                        </p>
                    </div>
                </div>
            </div>
    )
}