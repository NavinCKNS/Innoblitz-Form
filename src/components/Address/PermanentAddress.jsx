import React, { useState } from "react";

export default function PermanentAddress({data,setData}) {
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
    <div className="grid-address">
      <div className="mb-3 floor">
        <label htmlFor="address" className="form-label">
          Floor/Door Number:
        </label>
        <input required type="text" className="form-control" id="address" value={data.permanentAddress.floorNo} onChange={(e) => {
  setData((val) => ({ ...val,permanentAddress:{...val.permanentAddress,floorNo: e.target.value}}));}}  />
      </div>
      <div className=" mb-3 street">
        <label htmlFor="address" className="form-label">
          Street,Area:
        </label>
        <input required type="text" className="form-control" id="address" value={data.permanentAddress.area}onChange={(e) => {
  setData((val) => ({ ...val,permanentAddress:{...val.permanentAddress,area: e.target.value}}));}} />
      </div>
      <div className="mb-3 city">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input required type="text" className="form-control" id="city" value={data.permanentAddress.city} onChange={(e) => {
  setData((val) => ({ ...val,permanentAddress:{...val.permanentAddress,city: e.target.value}}));}}/>
      </div>
      <div className="mb-3 state">
        <label htmlFor="state" className="form-label">
          State:
        </label>
        <select className="form-select" id="state" value={data.permanentAddress.state} onChange={(e) => {
  setData((val) => ({ ...val,permanentAddress:{...val.permanentAddress,state: e.target.value}}));}} >
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
        <input required type="number" className="form-control" id="pincode" value={data.permanentAddress.pincode}onChange={(e) => {
  setData((val) => ({ ...val,permanentAddress:{...val.permanentAddress,pincode: e.target.value}}));}} />
      </div>
    </div>
  );
}
