import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MessageBoard from "./MessageBoard";
import AllPosts from "./AllPosts";
import PostsView from "./PostsView";
import Welcome from "./Welcome";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostsView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
