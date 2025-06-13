import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home";

import AllArtifacts from "../components/AllArtifacts";
import MyArtifacts from "../components/MyArtifacts";
import Login from "../components/Login";
import Register from "../components/Register";
import AddArtifactForm from "../components/AddArtifactForm";
import ErrorPage from "../components/ErrorPage";
import ArtifactsDetails from "../components/ArtifactsDetails";
import UpdateArtifact from "../components/UpdateArtifact";
import PrivateRoute from "../components/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
           index:true,
           loader:()=>fetch('http://localhost:3000/artifacts'),
            Component:Home
        },
        {
            path:'addArtifacts',
            element:<PrivateRoute>
             <AddArtifactForm></AddArtifactForm>
          </PrivateRoute>
           
        },
      {
          path:'allArtifacts',
          loader:()=>fetch('http://localhost:3000/artifacts'),
          Component:AllArtifacts
        },
        {
            path:'myArtifacts',
            // loader:()=>fetch('http://localhost:3000/artifacts'),
          element:<PrivateRoute>
             <MyArtifacts></MyArtifacts>
          </PrivateRoute>

        },
        {
          path:'updateArtifact/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/artifacts/${params.id}`).then(res => res.json()),
          element:<PrivateRoute>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRoute>

        },

        {
          path:'login',
          Component:Login
        },
        {
          path:'register',
          Component:Register
        },

        {
           path:'artifacts/:id',
            loader: ({ params }) => fetch(`http://localhost:3000/artifacts/${params.id}`).then(res => res.json()),
            element:<PrivateRoute>
             <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoute>

                
        },

        {
          path:'/*',
          Component:ErrorPage
        },

        
    ]
  }
]);




export default router;