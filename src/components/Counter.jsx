import React from "react";
import {connect} from 'react-redux';

function Counter(props) {
    let {count, increase, decrease} = props;
   
  return (
    // <div>
    //     <div style={{height: '80vh'}} className="bg-light p-5 text-center ">
    //         <h1 className="text-center">Hello Counter Component</h1>
    //         <p>Counter is : {count} </p>
    //         <button className="btn btn-success m-2" onClick={increase}>+</button>
    //         <button className="btn btn-danger m-2" onClick={decrease}>-</button>

    //     </div>
    // </div>
    <div className="container my-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={require('../assets/images/thumbnail-5.jpg')} className="img-fluid rounded" alt=""  style={{height:'100%'}}/>
                </div>
                <div className="col-6" style={{  }} >
                    <h3 style={{color: 'rgb(107, 164, 193 )'}} className="pb-2">Product</h3>
                    <p class="card-text p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam excepturi ad cum culpa repellendus aperiam, dignissimos ipsam pariatur incidunt eaque at tempora doloribus labore perferendis similique magni accusantium quod nesciunt quis rerum commodi soluta aliquid? Saepe atque officia aperiam.</p>
                    <h6 className="pb-2">Price: 100 $</h6>
                    <div className="mt-4 pb-2">
                        <span style={{  fontSize: 18,fontWeight:900, cursor: "pointer" }} className="btn btn-outline-info px-3 py-1 " onClick={increase}>+</span>
                        <span className="mx-4 " style={ {fontSize: 20 }} >{count}</span>
                        <span style={{ fontSize: 20,fontWeight:900,  cursor: "pointer" }} className="btn btn-outline-info px-3 py-1" onClick={decrease}>-</span>
                        {
                            count == 0 && (
                                <p className="text-danger fw-bold my-2 pt-2">Can't Decrease Counter Value Less Than Zero</p>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
  );
}

let mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    }
};

let mapToDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({type:'INCREASE'}),
        decrease: () => dispatch({type:'DECREASE'}),
    }
};
export default connect(mapStateToProps, mapToDispatchToProps)(Counter);