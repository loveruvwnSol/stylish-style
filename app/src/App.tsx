import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { supabase } from "./libs/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { UsernameSetting } from "./pages/UsernameSetting";
import { Settings } from "./pages/Settings";
import { useUserSettings } from "./hooks/useUserSettings";

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
  }, []);

  const [{ userSetting }] = useUserSettings();
  return (
    <Routes>
      <Route path="/" element={<Home bg={userSetting?.color} />} />
      <Route path="/settings" element={<Settings bg={userSetting?.color} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/usernameSetting" element={<UsernameSetting />} />
    </Routes>
  );
};

export default App;
