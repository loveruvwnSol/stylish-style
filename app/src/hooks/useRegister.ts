import { supabase } from "../libs/supabaseClient";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) navigate("/");
    else alert(error);
  };

  const createAccount = async (
    name: string,
    email: string,
    password: string
  ) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error) {
      alert("send mail to your address!");
      navigate("/login");
      const { data, error }: any = await supabase
        .from("users")
        .insert({ name: name, email: email })
        .select();
      if (error) alert("error");
      else {
        const { error } = await supabase
          .from("user_settings")
          .insert({ user_id: data[0].id });
        if (error) alert("error");
      }
    } else alert("error");
  };

  return [{ login, createAccount }];
};
