import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Create from "./pages/Create";


function App() {
   const routes = createBrowserRouter([
    {
      path: '/',
      element : <MainLayout/>,
      children : [
        { 
          path: "/create",
          element: <Create/>
        }
      ]
    }
   ])

  return(
    <RouterProvider router={routes}/>
  )
}

export default App;
