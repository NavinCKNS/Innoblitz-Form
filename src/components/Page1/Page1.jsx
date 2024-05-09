import React, { useContext, useState } from "react";
import "./page1Style.css";

export default function Page1({setData,data}) {
  return (
    <>
      <div className="page1">
        <div className="profile-form">
          <div className="profile">
            <img className="profile-pic" src={data.image} alt="Profile image" />
          </div>

          <div className="mb-3">
            <label htmlFor="file" className="form-label file">
              Choose File
            </label>
            <input required type="file" accepts=" image/jpeg, image/png, image/jpg"  className="form-control" id="file" onChange={(e)=>{
            (e.target.files[0].size<100*1024)?setData((val)=>({...val,image:URL.createObjectURL(e.target.files[0])})):alert("Your file size larger than 100KB")

              }} />
              <div id="fileHelp" className="form-text">
                Image should be larger than 100 KB.
          </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input required
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            value={data.name}
            
            onChange={(e) => setData(previousData => ({ ...previousData, name: e.target.value }))}

          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input required
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            aria-describedby="emailHelp"
            onChange={(e) => setData(previousData => ({ ...previousData, email: e.target.value }))}
          />
          <div id="emailHelp" className="form-text">

            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input required type="password" className="form-control" id="password" value={data.password} onChange={(e) => setData(previousData => ({ ...previousData, password: e.target.value }))} />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input required type="text" className="form-control"  value={data.mobileNumber} onChange={(e) => setData(previousData => ({ ...previousData, mobileNumber: e.target.value }))} id="mobile" />
          <div id="nameHelp" className="form-text">
            We'll never share your number with anyone else.
          </div>
        </div>
        <div className="mb-3 gender">
          <label className="form-label">Gender </label>
          <div className="form-check">
            <input required
              className="form-check-input required" type="radio" name="gender" id="male"
              value="male"
              onChange={(e) => setData(previousData => ({ ...previousData, gender: e.target.value }))}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input required
              className="form-check-input required"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setData(previousData => ({ ...previousData, gender: e.target.value }))}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
