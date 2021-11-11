import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import $ from "jquery";
function App() {
  useEffect(() => {
    $("#target").on("click", function () {
      //$(".navbar1").fadeToggle();
      alert("jquery ");
    });
  });

  return (
    <div className="App">
      <div id="target">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  );
}

export default App;
