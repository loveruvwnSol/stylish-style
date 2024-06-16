import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

export const useUser = () => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const { data: currentUser } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", currentUser.user?.id);
    if (!error) {
      setUser(data[0]);
    } else alert(error.message);
  };

  return user;
};

export const useUserIcon = () => {
  const [userIcon, setUserIcon] = useState<any>();
  useEffect(() => {
    getUserIcon();
  }, []);

  const getUserIcon = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data: icon } = await supabase.storage
      .from("user_icons")
      .getPublicUrl(currentUser.user?.id + "/icon");
    if (
      icon.publicUrl ===
      "https://vgckzlkbdgwchjktpyij.supabase.co/storage/v1/object/public/user_icons/" +
        currentUser.user?.id +
        "/icon"
    ) {
      setUserIcon(icon.publicUrl);
    } else {
      const { data: default_icon } = await supabase.storage
        .from("user_icons")
        .getPublicUrl("default_icon");
      setUserIcon(default_icon.publicUrl);
    }
  };

  return userIcon;
};
