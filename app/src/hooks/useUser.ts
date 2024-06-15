import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

export const useUser = () => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: currentUser } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", currentUser.user?.id);
      if (!error) {
        setUser(data[0]);
      }
    };
    getCurrentUser();
  }, [user]);

  return user;
};
