import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/Home.jsx'
import Signup from './Home/Signup.jsx'
import Login from './Home/Login.jsx'
import About from './Home/About.jsx'
import Form from './Home/Form.jsx'
import Adopt from './Home/Adopt.jsx'
import { AuthProvider } from './Home/AuthContext.jsx'
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import "./index.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />}/>
          <Route path="/adopt" element={<Adopt />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
