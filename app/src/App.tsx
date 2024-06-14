import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { supabase } from "./libs/supabaseClient";
import { Session } from "@supabase/supabase-js";

const App = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const session = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session == null) navigate("/login");
      setSession(session);
    };
    session();
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
    </Routes>
  );
};

export default App;
