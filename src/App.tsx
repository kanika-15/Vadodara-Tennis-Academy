/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PlaceholderPage title="About Us" />} />
          <Route path="programs" element={<PlaceholderPage title="Our Programs" />} />
          <Route path="coaches" element={<PlaceholderPage title="Coaches" />} />
          <Route path="facilities" element={<PlaceholderPage title="Facilities" />} />
          <Route path="gallery" element={<PlaceholderPage title="Gallery" />} />
          <Route path="schedule" element={<PlaceholderPage title="Schedule & Pricing" />} />
          <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
