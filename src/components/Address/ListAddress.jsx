import React, { useState } from "react";

export default function ListAddress({ address, data, index, setData }) {
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
        <input
          type="text"
          className="form-control"
          id="address"
          value={data.addressList[index].floorNo}
          onChange={(e) => {
            setData((val) => ({
              ...val,
              addressList: val.addressList.map((address, i) =>
                i === index ? { ...address, floorNo: e.target.value } : address
              ),
            }));
          }}
        />
      </div>
      <div className=" mb-3 street">
        <label htmlFor="address" className="form-label">
          Street,Area:
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={data.addressList[index].area}
          onChange={(e) => {
            setData((val) => ({
              ...val,
              addressList: val.addressList.map((address, ind) =>
                ind === index ? { ...address, area: e.target.value } : address
              ),
            }));
          }}
        />
      </div>
      <div className="mb-3 city">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          value={data.addressList[index].city}
          onChange={(e) => {
            setData((val) => ({
              ...val,
              addressList: val.addressList.map((address, ind) =>
                ind === index ? { ...address, city: e.target.value } : address
              ),
            }));
          }}
        />
      </div>
      <div className="mb-3 state">
        <label htmlFor="state" className="form-label">
          State:
        </label>
        <select
          className="form-select"
          id="state"
          value={data.addressList[index].state}
          onChange={(e) => {
            setData((val) => ({
              ...val,
              addressList: val.addressList.map((address, ind) =>
                ind === index ? { ...address, state: e.target.value } : address
              ),
            }));
          }}
        >
          <option value="">Select State</option>
          {indiaStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3 pincode">
        <label htmlFor="pincode" className="form-label">
          Pincode:
        </label>
        <input
          type="number"
          className="form-control"
          id="pincode"
          value={data.addressList[index].pincode}
          onChange={(e) => {
            setData((val) => ({
              ...val,
              addressList: val.addressList.map((address, ind) =>
                ind === index ? { ...address, pincode: e.target.value } : address
              ),
            }));
          }}
        />
      </div>
    </div>
  );
}
