import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import CategoryProducts from './components/CategoryProducts';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'products', Component: ProductCatalog },
      { path: 'products/silver-rings', Component: CategoryProducts },
      { path: 'products/silver-bracelets', Component: CategoryProducts },
      { path: 'products/silver-necklaces', Component: CategoryProducts },
      { path: 'products/silver-earrings', Component: CategoryProducts },
      { path: 'products/silver-sets', Component: CategoryProducts },
      { path: 'products/brass-rings', Component: CategoryProducts },
      { path: 'products/brass-bracelets', Component: CategoryProducts },
      { path: 'products/brass-necklaces', Component: CategoryProducts },
      { path: 'products/brass-earrings', Component: CategoryProducts },
      { path: 'products/brass-sets', Component: CategoryProducts },
      { path: 'products/:id', Component: ProductDetail },
      { path: 'about', Component: AboutUs },
      { path: 'contact', Component: ContactUs },
      { path: 'blog', Component: Blog },
      { path: 'blog/:id', Component: BlogPost },
      { path: '*', Component: NotFound },
    ],
  },
]);
