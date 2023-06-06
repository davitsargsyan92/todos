import {lazy , Suspense} from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./copmponents/Header/Header";
// import SignIn from "./copmponents/Sign-In/SignIn";
// import SignUp from "./copmponents/Sign-up/Sign-up";

const SignIn = lazy(() => import("./copmponents/Sign-In/SignIn"));
const SignUp = lazy(() => import("./copmponents/Sign-up/Sign-up"));

console.log("test-1 feature branch1")


function App() {
  return (
      <div>
          <Header/>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path="/sign-in" element={<SignIn/>}/>
                  <Route path="/sign-up" element={<SignUp/>}/>
              </Routes>

          </Suspense>

          </div>

  );
}

export default App;


