import React, { useState } from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BuySell from "./pages/BuySell";
import Realestate from "./pages/Realestate";
import Vehicle from "./pages/Vehicle";
import Error from "./pages/Error";
import ProductUploadPage from "./pages/ProductUploadPage";
import ProductSlideCarousel from "./pages/ProductSlideCarousel";
import Profile from "./pages/Profile";
import DataContext from "./context/DataContext";
import Listings from "./pages/Listings";
import ProductDetail from "./pages/ProductDetail";
import TestCarousel from "./components/TestCarousel";
import TestSkeleton from "./pages/TestSkeleton";
import AddToBag from "./pages/AddToBag";
import ProductSearchingPage from "./pages/ProductSearchingPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [totalRequest, setTotalRequest] = useState(0);

  const handleLoadingFalse = () => {
    setLoading(false);
  };
  const handleLoadingTrue = () => {
    setLoading(true);
  };
  const changeTotalRequest = () => {
    setTotalRequest(totalRequest + 1);
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Header />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/buyandsell",
          element: <BuySell />,
        },
        {
          path: "/realestate",
          element: <Realestate />,
        },
        {
          path: "/carsandvehicles",
          element: <Vehicle />,
        },
        {
          path: "/upload",
          element: <ProductUploadPage />,
        },
        {
          path: "/carousel",
          element: <ProductSlideCarousel />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/listings",
          element: <Listings />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/test",
          element: <TestCarousel />,
        },
        {
          path: "/testskeleton",
          element: <TestSkeleton />,
        },
        {
          path: "/addtobag",
          element: <AddToBag />,
        },
        {
          path: "/search/:productTitle",
          element: <ProductSearchingPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        handleLoadingFalse,
        loading,
        handleLoadingTrue,
        changeTotalRequest,
        totalRequest,
      }}
    >
      <div className="w-full bg-[#383838] h-full">
        <div className="max-w-[1080px] mx-auto align items-center">
          <RouterProvider router={router} />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default App;
