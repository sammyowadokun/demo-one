import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />    
    </>
  );
}