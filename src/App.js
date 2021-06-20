import react from "react";
import Photo from "./Component/Profile/Photo";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='container'>
       <Photo className='ph'/>
       <FullName className='na'/>
       <Address className='add'/>
      </div>
    </div>
  );
}

export default App;
