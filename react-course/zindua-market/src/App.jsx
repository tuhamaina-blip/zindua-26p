import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import Register from '../pages/Register';
import Car from './components/Car';
import Me from './components/me';
import UserProfile, { Header } from './components/UserProfile';
import Welcome from './components/Welcome';
import ProductCard from './components/ProductCard';
import Counter from './components/Counter';
import UserProvider from './context/UserContext';
import Reducer from './components/Reducer';
import ProductList from './components/ProductList';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Cart from './components/ui/Cart';
import { CartProvider } from './context/CartContext';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import Contact from '@/components/Contact';
import ProductDetail from './components/ProductDetail';
import AdminOrders from './pages/AdminOrders';
import AdminOverview from './pages/AdminOverview';
import AdminProducts from './pages/AdminProducts';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './layouts/AdminLayout';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import { Toaster } from 'sonner';
import FetchData from './components/FetchData';




function App() {
  // const userData = { name: "Matthew", age: 18 };

  // const [products, setProducts] = useState([
  //   { id: 1, title: "Wireless Headphones", price: 2000.00, description: "Noise cancellation over-ear headphones" },
  //   { id: 2, title: "Smart Watch", price: 1000.00, description: "Track your fitness and health stats" },
  //   { id: 3, title: "Water Bottle", price: 500.00, description: "Insulated bottle that keeps drinks cold" }
  // ]);

  return (
    <>
    <Router>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            <Navbar/>
            <Toaster position='top-right' richColors/>
            {/* <FetchData/> */}
            <Routes>
              <Route path='/' element={<ProductList/>}/>
              <Route path='/login' element={<Login/ >} />
              <Route path='/product/:productId' element={<ProductDetail />}/>
              <Route path="/admin" element={<AdminRoute>
          <AdminLayout /> // A protected Route only accessible to admin users
          </AdminRoute>}>
          {/* index makes this component display when someone goes exactly to "/admin" */}
          <Route index element={<AdminOverview />} />
          {/* This displays at "/admin/orders" */}
          <Route path="orders" element={<AdminOrders />} />
          {/* This displays at "/admin/products" */}
          <Route path="products" element={<AdminProducts />} />
        </Route>
              <Route path='/register' element={<Register />} />
              <Route path='/contact' element={<Contact />} /> 
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/success' element={<CheckoutSuccess/>}/>
              
            </Routes>
            {/* <Footer/> */}
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </Router>
     
          
          {/* <Cart/> */}
        {/* <Counter/>
        <Reducer/>
        <Greeting name={"John"} />
        <Welcome name={'Matthew'} />
        <UserProfile user={userData} /> */}
        

        {/* <div>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div> */}

        {/* <Header name={"Michael"} />
        <Login />
        <Register />
        <Goodbye message={"Thanks for visiting"} />
        <Car color={'Red'} brand={'Toyota'} model={'Fielder'} year={2020} />
        <Me name={'Matthew'} age={18} gender={'male'} /> */}

    </>
  );
}

export default App;