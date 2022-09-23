import Loadable from 'react-loadable';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = Loadable({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Loading</div>,
});

const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

// function CaesarCipher(str, num) {

//   const arr = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];

//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     let isMatch = (element) => element == str[i];
//     let index = arr.findIndex(isMatch);

//     if (index != -1) {
//       result += arr[GetProperIndex(arr.length, num + index)];
//     }
//     else {
//       isMatch = (element) => element == str[i].toLowerCase();
//       index = arr.findIndex(isMatch);
//       if (index != -1) {
//         result += arr[GetProperIndex(arr.length, num + index)].toUpperCase();
//       }
//       else {
//         result += str[i];
//       }
//     }
//   }

//   return result;
// }

// function GetProperIndex(arrayLength, desiredIndex) {
//   while (desiredIndex > arrayLength) {
//     desiredIndex -= arrayLength;
//   }
//   return desiredIndex;
// }

// console.log(CaesarCipher(readline()));




