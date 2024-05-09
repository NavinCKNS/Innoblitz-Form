import React, { useState } from "react";

export default function CurrentAddress({ address ,data,setData}) {
  const indiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  return (
    <div className={`${!address && "grid-address"}`}>
      <div className="mb-3 floor">
        <label htmlFor="address" className="form-label">
          Floor/Door Number:
        </label>
        <input required type="text" className="form-control" id="address" value={data.currentAddress.floorNo} onChange={(e) => {
  setData((val) => ({ ...val,currentAddress:{...val.currentAddress,floorNo: e.target.value}}));}}/>
      </div>
      <div className=" mb-3 street">
        <label htmlFor="address" className="form-label">
          Street,Area:
        </label>
        <input required type="text" className="form-control" id="address" value={data.currentAddress.area}onChange={(e) => {
  setData((val) => ({ ...val,currentAddress:{...val.currentAddress,area: e.target.value}}));}} />
      </div>
      <div className="mb-3 city">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input required type="text" className="form-control" id="city" value={data.currentAddress.city} onChange={(e) => {
  setData((val) => ({ ...val,currentAddress:{...val.currentAddress,city: e.target.value}}));}}/>
      </div>
      <div className="mb-3 state">
        <label htmlFor="state" className="form-label">
          State:
        </label>
        <select className="form-select" id="state" value={data.currentAddress.state} onChange={(e) => {
  setData((val) => ({ ...val,currentAddress:{...val.currentAddress,state: e.target.value}}));}} >
        <option value="">Select State</option>
        {indiaStates.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
        </select>
      </div>

      <div className="mb-3 pincode">
        <label htmlFor="pincode" className="form-label">
          Pincode:
        </label>
        <input required type="number" className="form-control" id="pincode" value={data.currentAddress.pincode}onChange={(e) => {
  setData((val) => ({ ...val,currentAddress:{...val.currentAddress,pincode: e.target.value}}));}} />
      </div>
    </div>
  );
}
