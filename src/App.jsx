import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";



function App() {
  const [data, setData] = useState({
    image:"https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307t-user-account-image-log-user.png",
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "",
    addressList: [
      { floorNo: "", area: "", city: "", state: "", pincode: "" },
      { floorNo: "", area: "", city: "", state: "", pincode: "" },
      { floorNo: "", area: "", city: "", state: "", pincode: "" },
      { floorNo: "", area: "", city: "", state: "", pincode: "" },
      { floorNo: "", area: "", city: "", state: "", pincode: "" },
    ],
    currentAddress: { floorNo: "", area: "", city: "", state: "", pincode: "" },
    permanentAddress: {
      floorNo: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const toLocalStorage=(data)=>{
    localStorage.setItem("Data",JSON.stringify(data))
  }
  const forms = [<Page1 setData={setData} data={data} />, <Page2 setData={setData} data={data}  />];
  const [pageNumber, setPageNumber] = useState(0);
  const nextPage = () => {
    setPageNumber(() => pageNumber + 1);
  };
  const previousPage = () => {
    setPageNumber(() => pageNumber - 1);
  };

  return (
    <>
        <form className="form">
          {forms[pageNumber]}
          <div className="buttons">
            {pageNumber > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={previousPage}
              >
                Back
              </button>
            )}
            
            
                {forms.length -1 === pageNumber ? (
              <button type="submit" className="btn btn-primary" onClick={()=>{
                toLocalStorage(data)
                }} >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={nextPage}
              >
                Next
              </button>
            )}
          </div>
        </form>
    </>
  );
}

export default App;
