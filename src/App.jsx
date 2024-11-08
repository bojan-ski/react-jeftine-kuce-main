import { RouterProvider, createBrowserRouter } from "react-router-dom"
// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// PAGES
import AppLayout from "./pages/AppLayout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import PostedListings from "./pages/PostedListings.jsx"
import SelectedListing from "./pages/SelectedListing.jsx"
import Agencies from "./pages/Agencies.jsx"
import Profile from "./pages/Profile.jsx"
import Blog from "./pages/Blog.jsx"
import SelectedBlogPost from "./pages/SelectedBlogPost.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

// LOADERS
import { loader as selectedListingLoader } from "./pages/SelectedListing.jsx"
import { loader as selectedBlogPostLoader } from "./pages/SelectedBlogPost.jsx"


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/oglasi',
        element: <PostedListings />,
      },
      {
        path: '/oglasi/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader(queryClient)
      },
      {
        path: '/agencije',
        element: <Agencies />,
      },
      {
        path: '/agencije/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader(queryClient)
      },
      {
        path: '/nalog',
        element: <Profile />,
      },
      {
        path: '/nalog/:id',
        element: <SelectedListing />,
        loader: selectedListingLoader(queryClient)
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SelectedBlogPost />,
        loader: selectedBlogPostLoader(queryClient)
      },
      {
        path: '/o_nama',
        element: <AboutUs />
      },
      {
        path: '/kontakt',
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
