import React from "react";
import Buybook1 from "../reducer/action";
import { useDispatch, useSelector } from "react-redux";

const BookShop = () => {
  const alldata = useSelector((state) => state.noofbook);
  const dispatch = useDispatch();
  return (
    <>
      <div>No of Books: {alldata} </div>
      <br />
      <div>
        <button onClick={dispatch(Buybook1())}>Click Here</button>
      </div>
    </>
  );
};

export default BookShop;
