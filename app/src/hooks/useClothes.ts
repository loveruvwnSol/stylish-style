import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";
import { UUID } from "crypto";

export const useClothes = () => {
  const [clothes, setClothes] = useState<any[]>([]);
  const [favClothes, setFavClothes] = useState<any[]>([]);

  useEffect(() => {
    getClothes();
    getFavoriteClothes();
  }, []);

  const getClothes = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("clothes")
      .select()
      .eq("user_id", currentUser.user?.id);
    if (!error) {
      setClothes(data);
    } else alert(error.message);
  };

  const getFavoriteClothes = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("clothes")
      .select()
      .eq("user_id", currentUser.user?.id)
      .eq("favorite", true);
    if (!error) {
      setFavClothes(data);
    } else alert(error.message);
  };

  const uploadClothes = async (
    user_id: UUID,
    name: string,
    type: string,
    favorite: boolean,
    color: string,
    file: File
  ) => {
    const { error } = await supabase
      .from("clothes")
      .insert({
        user_id: user_id,
        name: name,
        type: type,
        favorite: favorite,
        color: color,
      })
      .select();
    if (!error) {
      const { data: allClothesLength } = await supabase
        .from("clothes")
        .select();
      const { error } = await supabase.storage
        .from("clothes")
        .upload(user_id + "/" + allClothesLength?.length + "_image", file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) alert(error.message);
      else alert("upload your clothes");
    }
  };

  const updateClothes = async (
    id: number,
    name: string,
    favorite: boolean,
    color: string
  ) => {
    const { error } = await supabase
      .from("clothes")
      .update({ name: name, favorite: favorite, color: color })
      .eq("id", id);
    if (error) alert(error.message);
    else alert("update your clothes");
  };

  const updateClothesImage = async (id: number, user_id: UUID, file: File) => {
    const { error } = await supabase.storage
      .from("clothes")
      .update(user_id + "/" + id + "_image", file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) alert(error.message);
    else alert("update your clothes image");
  };

  const toggleFavorite = async (id: number, favorite: boolean) => {
    const { error } = await supabase
      .from("clothes")
      .update({ favorite: !favorite })
      .eq("id", id);
    if (error) alert(error.message);
  };

  const deleteClothes = async (id: number, user_id: UUID) => {
    const response = await supabase.from("countries").delete().eq("id", id);
    const { data, error } = await supabase
      .from("clothes")
      .select()
      .eq("user_id", user_id);
    if (!error) {
      setClothes(data);
      const { error } = await supabase.storage
        .from("clothes")
        .remove([user_id + "/" + id + "_image"]);
      if (error) {
        alert(error.message);
      }
    } else {
      alert(error.message);
    }
  };

  return [
    {
      clothes,
      favClothes,
      uploadClothes,
      updateClothes,
      updateClothesImage,
      toggleFavorite,
      deleteClothes,
    },
  ];
};
