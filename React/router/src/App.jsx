import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import LoginPage from "./components/LoginPage"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm"



function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <LoginPage></LoginPage>
    },
    {
      path : "/home",
      element : <Home></Home>,
      children : [
        {
          path : "/home",
          element : <Welcome></Welcome>
        },
        {
          path: "/home/about",
          element : <About></About>
        },
        {
          path : "/home/contact",
          element : <Contact></Contact>,
          children :[
            {
              path: "/home/contact",
              element : <ContactForm></ContactForm>
            }
          ]
        }
      ]
    },
    
  ]);
 

  return (
    <>
      <h1>Hello</h1>
      
       <RouterProvider router={router} />
    </>
  )
}

export default App
