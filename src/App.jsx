import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "@/components/layout/ScrollToTop.jsx";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />    
    </>
  );
}