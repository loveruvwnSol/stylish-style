import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

export const useUserSettings = () => {
  const [userSetting, setUserSetting] = useState<any>();

  useEffect(() => {
    getUserSettings();
  }, [userSetting]);

  const getUserSettings = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("user_settings")
      .select()
      .eq("user_id", currentUser.user?.id);
    if (!error) {
      setUserSetting(data[0]);
    }
  };

  const updateUserColor = async (id: string | undefined, color: string) => {
    const { error } = await supabase
      .from("user_settings")
      .update({ color: color })
      .eq("user_id", id);
    if (error) alert(error.message);
  };

  const toggleDarkMode = async (id: string | undefined, darkmode: boolean) => {
    const { error } = await supabase
      .from("user_settings")
      .update({ darkmode: darkmode })
      .eq("user_id", id);
    if (error) alert(error.message);
  };

  return [{ userSetting, updateUserColor, toggleDarkMode }];
};
