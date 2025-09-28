import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/Home.jsx'
import Signup from './Home/Signup.jsx'
import Login from './Home/Login.jsx'
import About from './Home/About.jsx'
import Form from './Home/Form.jsx'
import Adopt from './Home/Adopt.jsx'
import View from './Home/View.jsx'
import Allposts from './Home/Allposts.jsx'
import Edit from './Home/Edit.jsx'
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
          <Route path="/form/:id" element={<Form />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/posts/:id" element={<Allposts />} />
          <Route path="/edit/:id/:petId" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
