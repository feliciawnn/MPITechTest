import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Landing from './component/Landing'
import CountChar from './component/CountChar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/task1" element={<CountChar />} />
          {/* <Route path="/task2" element={<SumOrder />} />
          <Route path="/task3" element={<UserLanding />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
