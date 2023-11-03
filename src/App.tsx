import React from "react";
import Footer from "./components/footer/Footer";
import StateIcons from "./components/StateIcons";
import { Outlet } from "react-router-dom";


function App(): React.ReactElement {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-[rgba(247,247,250,1)] gap-8">
      <h1 className="text-lg font-medium">AirBnb clone app</h1>
      {/* Mobile */}
      <div className="h-[550px] w-[300px] shadow-xl border-black rounded-[25px] bg-white overflow-hidden flex flex-col">
        <StateIcons/>
        <div className="flex-1">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
