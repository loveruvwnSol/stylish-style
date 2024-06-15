import { supabase } from "../libs/supabaseClient";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) {
      const { data: currentUser } = await supabase.auth.getUser();
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", currentUser.user?.id);
      if (data?.length === 0 || data == null) {
        navigate("/usernameSetting");
      } else {
        navigate("/");
      }
    } else alert(error);
  };

  const createAccount = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error) {
      alert("send mail to your address!");
      navigate("/login");
    } else alert("error");
  };

  const InsertUserTable = async (name: string) => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data, error }: any = await supabase
      .from("users")
      .insert({
        id: currentUser.user?.id,
        name: name,
        email: currentUser.user?.email,
      })
      .select();
    if (error) alert("error");
    else {
      const { error } = await supabase
        .from("user_settings")
        .insert({ user_id: data[0].id });
      if (error) alert("error");
      else navigate("/");
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return;
    else navigate("/login");
  };

  return [{ login, createAccount, InsertUserTable, logout }];
};
