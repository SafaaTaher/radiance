import { createBrowserRouter } from "react-router";
//Pages
import ContactUs from "@/Pages/ContactUs/ContactUs";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Products from "@/Pages/Products/Products";
import Register from "@/Pages/Register/Register";
import NotFound from "@/Pages/NotFound/NotFound";
//Layouts
import MainLayout from "@/Layout/MainLayout/MainLayout";
import AuthLayout from "@/Layout/AuthLayout/AuthLayout";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [

      {
        index: true,
        Component: Home,
      },

      {
        path:"contact-us",
        component: ContactUs,
      },

      {
        path: "products",
        Component: Products,
        // children: [
        //   {
        //      path: "productdetails/:id",
        //      Component: ProductDetails,
        //   },
        // ],
      },

      {
        path: "*",
        Component: NotFound,
      },

    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
        // action: async ({request})=>{
        //   let formData = await request.formData();
        //   const data = Object.fromEntries(formData.entries());
        //   console.log("~ FormData : " , data);
        // }
      },
    ],
  },
]);

export default router;
