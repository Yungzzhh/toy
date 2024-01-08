import { Suspense, lazy, useEffect } from "react";
import "./App.css";
// import { Button } from "antd";
import { axios } from "@/package/axios";
import TableTest from "./page/tableTest";
import LazyLoadImage from "./hooks/lazyload";
import flower from "@/assets/images/flower.jpg";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import CV from "@/page/cv";
import LazyLoadComp from "./page/lazyLoadComp";

interface RouteLink {
  path: string;
  pathName: string;
  element: JSX.Element;
  children?: RouteLink[];
}
// React 组件懒加载
const LazyloadRoute = lazy(() => import("@/page/lazyLoadRoute"));

function App() {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await axios.get("/pic");
    console.log(res);
  };

  const routerLink: RouteLink[] = [
    {
      path: "/",
      pathName: "Home",
      element: <DefaultPage />,
    },
    {
      path: "/table",
      pathName: "table",
      element: <TableTest />,
    },
    {
      path: "/lazyloadImg",
      pathName: "lazyloadImg",
      element: <LazyLoadImageTest />,
    },
    {
      path: "/cv",
      pathName: "cv",
      element: <CV />,
    },
    {
      path: "/lazyloadComp",
      pathName: "lazyloadComp",
      element: <LazyLoadComp />,
    },
    {
      path: "/lazyloadRoute",
      pathName: "lazyloadRoute",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyloadRoute />
        </Suspense>
      ),
    },
  ];

  return (
    <Router>
      <div>
        <div className="router-link">
          {routerLink.map((route) => (
            <Link
              className="router-link__text"
              to={route.path}
              key={route.path}
            >
              {route.pathName}
            </Link>
          ))}
        </div>

        <Routes>
          {routerLink.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

function LazyLoadImageTest() {
  return <LazyLoadImage src={flower} alt="" />;
}

function DefaultPage() {
  return (
    <>
      <div>this is a default page</div>
    </>
  );
}

function Loading() {
  return <>route loading...</>;
}

export default App;
