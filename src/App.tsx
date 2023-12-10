import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import StudentDetailsShow from './Component/StudentDetails/StudentDetailsShow'
import { Provider } from "react-redux";
import Header from "./Component/Header/Header";
import { store } from "./Store/Store";
import CreateEditStudentDetails from "./Component/StudentDetails/CreateEditStudentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [   
      {
        path: "",
        element:  <StudentDetailsShow/>
        ,
      },
      {
        path: "/creatstudentdetails",
        element: <CreateEditStudentDetails />,
      },
      {
        path: "/editstudentdetails/:id",
        element: <CreateEditStudentDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        {/* here we written the header seperatly to tell that we are 
        want to show header in every page rendering  */}
        <Outlet />
        {/* here outlet is used to display the data which is comming 
        from the router */}
        {/* <Footer/> */}
        {/* if you want to show footer in every component then we can provide here */}
      </Provider>
    </>
  );
}

export default App;
