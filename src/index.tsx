import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Root from './Root';
import ProtectedRoute from './components/ProtectedRoute'
import Task from './components/CreateTask';
import TaskList from './components/TaskList'
import { Provider } from 'react-redux';
import  {Login}  from './components/Login';
import SignUp from './components/Signup';
import store from './store'
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([{
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'',
        element:<ProtectedRoute/>,
        children:[ { path:'', element:[ <Task/>, <TaskList/> ]}]
      },
      { path:'about', element:<About/>},
      { path:'login', element:<Login/>},
      { path:'signup', element:<SignUp/>}
    ]
  }
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <RouterProvider
          router={router}
          fallbackElement={"Loading"}
        />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
