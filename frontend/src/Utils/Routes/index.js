// import { Navigate } from "react-router-dom";
// import { Apointment, Chat, ContactUs, Home, MakeAppointments, Services } from "../../Components";
// import { DoctorsElement, LoginElement, SignupElement } from "../../Elements";

// // export const unAuthenticatedRoutes = [
// //     {
// //         path: '/',
// //         element:<Home/>
// //     },
// //     {
// //         path: '/login',
// //         element:<LoginElement/>
// //     },
// //     {
// //         path: '/signup',
// //         element: <SignupElement/>
// //     }
// // ];

// // export const unAuthenticatedRouteNames = ['Home', 'Login', 'Signup'];

// // export const authenticatedRoutes = [
// //     {
// //         path: '/',
// //         element:<Home/>
// //     },
// //     {
// //         path: '/contactus',
// //         element:<ContactUs/>
// //     },
// //     {
// //         path: '/doctors',
// //         element:<DoctorsElement/>
// //     },
// //     {
// //         path: '/Services',
// //         element:<Services/>
// //     },
// //     {
// //         path: '/makeappointment',
// //         element: <MakeAppointments/>
// //     },
// //     {
// //         path: '/chat',
// //         element: <Chat/>
// //     },
// //     {
// //         path: '/apointments',
// //         element:<Apointment/>
// //     }
// // ];

// // export const authenticatedRouteNames = ['Home','Contact US','Doctors','Services']
// const {cookies} = use
// const isAuthenticated = !!cookies.get('auth');

// export const routes = [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: '/login',
//       element: <LoginElement />
//     },
//     {
//       path: '/signup',
//       element: <SignupElement/>
//     },
//     {
//       path: '/contactus',
//       element:<ContactUs />
//     },
//     {
//       path: '/doctors',
//       element:<DoctorsElement />
//     },
//     {
//       path: '/Services',
//       element:<Services />
//     },
//     {
//       path: '/makeappointment',
//       element: isAuthenticated ? <MakeAppointments /> : <Navigate to="/" />
//     },
//     {
//       path: '/chat',
//       element: isAuthenticated ? <Chat /> : <Navigate to="/doctors" />
//     },
//     {
//       path: '/apointments',
//       element: isAuthenticated ? <Apointment /> : <Navigate to="/" />
//     }
//   ];