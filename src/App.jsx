import { HomePage } from "./HomePage"
import { Routes, Route } from 'react-router'
import {NotFoundPage} from "./NotFoundPage"
import { AboutMePage } from "./AboutMePage"
import { MyWork } from "./MyWork"
import { ContactPage } from "./ContactPage"


function App() {
  return (
    <>
      <Routes>
        <Route index element={< HomePage />} />
        <Route path="*" element={< NotFoundPage />} />
        <Route path="/aboutme" element={< AboutMePage />} />
        <Route path="/mywork" element={< MyWork />} />
        <Route path="/contact" element={< ContactPage />} />
      </Routes>

    </>
  )
}

export default App



// return (
//   <Routes>
//    <Route index element={< HomePage />} />
//    <Route path="checkout" element={< CheckoutPage />} />
//    <Route path="orders" element={< OrdersPage />} />
//    <Route path="tracking" element={< TrackingPage />} />
//    <Route path="*" element={< NotFoundPage />} />

//   </Routes>
// );


