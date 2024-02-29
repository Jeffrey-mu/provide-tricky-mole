import { Route, Routes } from "react-router-dom"

import { About } from "./About"

export const Routing = () => (
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
)
