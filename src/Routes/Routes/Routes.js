import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import PurchaseConfirm from "../../Pages/PurchaseConfirm/PurchaseConfirm";
import PurchasePage from "../../Pages/PurchasePage/PurchasePage";
import Login from "../../Shared/Login/Login";
import Register from "../../Shared/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://booster-courses-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://booster-courses-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoutes>
            <PurchasePage></PurchasePage>
          </PrivateRoutes>
        ),

        loader: ({ params }) => fetch(`https://booster-courses-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
