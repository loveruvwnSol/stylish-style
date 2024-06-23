import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";
import axios from "axios";

export const useUser = () => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    getCurrentUser();
  }, [user?.name]);

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

  const updateUsername = async (id: string | undefined, name: string) => {
    const { error } = await supabase
      .from("users")
      .update({ name: name })
      .eq("id", id);
    if (!error) getCurrentUser();
  };

  return [{ user, updateUsername }];
};

export const useUserIcon = () => {
  const [userIcon, setUserIcon] = useState<any>();
  useEffect(() => {
    getUserIcon();
  }, []);

  const getUserIcon = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    try {
      const { data: icon } = await supabase.storage
        .from("user_icons")
        .getPublicUrl(currentUser.user?.id + "/icon");
      await axios.get(icon.publicUrl);
      setUserIcon(icon.publicUrl);
    } catch (err) {
      getDefaultIcon();
    }
  };

  const getDefaultIcon = async () => {
    const { data: default_icon } = await supabase.storage
      .from("user_icons")
      .getPublicUrl("default_icon");
    setUserIcon(default_icon.publicUrl);
  };

  const uploadUserIcon = async (id: string | undefined, file: File) => {
    const { error } = await supabase.storage
      .from("user_icons")
      .upload(id + "/icon", file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (!error) {
      alert("upload your icon");
      getUserIcon();
    }
  };

  return [{ userIcon, uploadUserIcon }];
};
