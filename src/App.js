import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, startTransition } from "react";

const HomePage = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/HomePage"));
    });
  });
});

const Redirect = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/redirect"));
    });
  });
});

const Login = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Login"));
    });
  });
});

const Register = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Register"));
    });
  });
});

const Materi = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Materi"));
    });
  });
});

const UnggahM = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/UnggahM"));
    });
  });
});


const About = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/About"));
    });
  });
});

const Profile = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Profile"));
    });
  });
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />                   
        <Route path="/Login" element={<Login />} />              
        <Route path="/Register" element={<Register />} />        
        <Route path="/Materi" element={<Materi />} />
        <Route path="/Profile" element={<Profile />} />            
        <Route path="/Materi/UnggahM" element={<UnggahM />} />   
        <Route path="/About" element={<About/>} />            
        <Route path="*" element={<Redirect />}/>                 
      </Routes>
    </BrowserRouter>
  );
}

export default App;