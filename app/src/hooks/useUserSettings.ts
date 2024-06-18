import { supabase } from "../libs/supabaseClient";

export const useUserSettings = (
  id: string | undefined,
  darkmode: boolean,
  color: string
) => {
  const updateUserSettings = async () => {
    const { error } = await supabase
      .from("user_settings")
      .update({ darkmode: darkmode, color: color })
      .eq("id", id);
    if (error) alert(error.message);
  };

  return { updateUserSettings };
};
