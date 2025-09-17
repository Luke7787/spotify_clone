import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage";
import { axiosInstance } from "./lib/axios";

function App() {
  // token
  const getSomeData = async () => {
    await axiosInstance.get("http://localhost:5000/api");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
      </Routes>
    </>
  );
}

export default App;
