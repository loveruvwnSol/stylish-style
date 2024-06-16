import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";
import { UUID } from "crypto";
import axios from "axios";

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

  const updateUsername = async (id: UUID, name: string) => {
    const { error } = await supabase
      .from("users")
      .update({ name: name })
      .eq("id", id);
    if (!error) {
      getCurrentUser();
    } else alert(error.message);
  };

  return [{ user, updateUsername }];
};

export const useUserIcon = () => {
  const [userIcon, setUserIcon] = useState<any>();
  useEffect(() => {
    getUserIcon();
  }, [userIcon]);

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

  const uploadUserIcon = async (id: UUID, file: File) => {
    const { error } = await supabase.storage
      .from("user_icons")
      .upload(id + "/icon", file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) alert(error.message);
    else alert("upload your icon");
  };

  const updateUserIcon = async (id: UUID, file: File) => {
    const { error } = await supabase.storage
      .from("user_icons")
      .update(id + "/icon", file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) alert(error.message);
    else alert("update your icon");
  };

  return [{ userIcon, uploadUserIcon, updateUserIcon }];
};
