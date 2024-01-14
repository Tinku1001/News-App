import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App =()=> {
 const pageSize = 10;
 const apiKey='cca3f68b073e4aa9a6a0e55ecb4ef453'

  const [progress, setProgress] = useState(0)


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mode: "light",
  //     alert: null,
  //   };
  // }

  // showAlert = (message, type) => {
  //   this.setState({
  //     alert: {
  //       msg: message,
  //       type: type,
  //     }
  //   });

  //   setTimeout(() => {
  //     this.setState({
  //       alert: null
  //     });
  //   }, 1500);
  // };

  // toggleMode = () => {
  //   if (this.state.mode === "light") {
  //     this.setState({ mode: "dark" });
  //     document.body.style.backgroundColor = "#042743";
  //     this.showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     this.setState({ mode: "light" });
  //     document.body.style.backgroundColor = "white";
  //     this.showAlert("Light mode has been enabled", "success");
  //   }
  // };

    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar color="#f11946" progress={progress} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress ={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress} 
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} 
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>

            {/*
            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            */}

            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} 
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} 
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress} 
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress} 
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
  export default App;
