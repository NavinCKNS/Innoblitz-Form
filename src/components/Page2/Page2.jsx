import React, { useContext, useState } from "react";
import "./page2Style.css";
import { MdLibraryAdd } from "react-icons/md";
import { MdBookmarkRemove } from "react-icons/md";
import CurrentAddress from "../Address/CurrentAddress";
import PermanentAddress from "../Address/PermanentAddress";
import ListAddress from "../Address/ListAddress";



export default function Page2({setData,data}) {
  const [address, setAddress] = useState(false);
  const [addAddress, setaddAddress] = useState([]);
  const removeComponent=(index)=>{
    setaddAddress(previousAddress=>previousAddress.filter((element,ind)=>index!==ind))
  }
  return (
    <>
      <div className="page1 ">
        <h1 className="mb-3" style={{ textAlign: "center" }}>
          Address
        </h1>
        <div className="mb-3  address-check">
          <label htmlFor="address" className="form-label">
            Is your permanent and current address the same?
          </label>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="radio"
              id="yes"
              name="address"
              onChange={() => setAddress(true)}
              checked={address}
            />
            <label className="form-check-label" htmlFor="yes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="no"
              name="address"
              onChange={() => setAddress(false)}
              checked={!address}
            />
            <label className="form-check-label" htmlFor="no">
              No
            </label>
          </div>
        </div>
        <h4 className={`${address && "hide"}`}>Current Address:</h4>
        <CurrentAddress address={address} data={data} setData={setData}/>
        <h4 className={`${address && "hide"}`}>Permanent Address:</h4>
        <div className={`${address && "hide"}`}>
          {!address &&(<PermanentAddress  data={data} setData={setData}/>)}
          
        </div>

        <div>
          {addAddress &&
            addAddress.map((Component, index) => (
              <div key={index}>
                <div className="address-head">
                <h4>Address {index + 1}</h4>
                <button type="button" className="btn" data-bs-toggle="button" title="remove" onClick={()=>removeComponent(index)}><MdBookmarkRemove /></button>
                </div>
                <Component data={data} index={index} setData={setData}/>
              </div>
            ))}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            addAddress.length < 5 &&
            setaddAddress((previousAddress) => [...previousAddress, ListAddress ])
          }
        >
          <MdLibraryAdd /> Add
        </button>
      </div>
    </>
  );
}
