import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Services } from './pages/Services/Services'
import { HowWeWork } from './pages/HowWeWork/HowWeWork'
import { CaseStudies } from './pages/CaseStudies/CaseStudies'
import { Contact } from './pages/Contact/Contact'

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'how-we-work', element: <HowWeWork /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'start', element: <Contact /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
