import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

export const useClothes = () => {
  const [clothes, setClothes] = useState<any[]>([]);
  const [favClothes, setFavClothes] = useState<any[]>([]);
  const [top, setTop] = useState<number>();
  const [bottom, setBottom] = useState<number>();

  useEffect(() => {
    getClothes();
    getFavoriteClothes();
  }, [clothes, favClothes]);

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
    user_id: string | undefined,
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

  const updateClothesImage = async (
    id: number,
    user_id: string | undefined,
    file: File
  ) => {
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

  const deleteClothes = async (id: number, user_id: string | undefined) => {
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

  const decideStyle = async (
    user_id: string | undefined
    // favorite: boolean | null,
    // topColor: string | null,
    // bottomColor: string | null
  ) => {
    const { data: tops, error } = await supabase
      .from("clothes")
      .select()
      .eq("user_id", user_id)
      .eq("type", "tops");
    // .eq("color", topColor);
    // .eq("favorite", favorite);
    if (!error) {
      const { data: bottoms, error } = await supabase
        .from("clothes")
        .select()
        .eq("user_id", user_id)
        .eq("type", "bottoms");
      // .eq("favorite", favorite)
      // .eq("color", bottomColor);
      if (!error) {
        setTop(tops[Math.floor(Math.random() * tops.length)].id);
        setBottom(bottoms[Math.floor(Math.random() * bottoms.length)].id);
      } else alert(error.message);
    } else alert(error.message);
  };

  const getStyle = () => {
    setTop(top);
    setBottom(bottom);
  };

  return [
    {
      clothes,
      favClothes,
      top,
      bottom,
      uploadClothes,
      updateClothes,
      updateClothesImage,
      toggleFavorite,
      deleteClothes,
      decideStyle,
      getStyle,
    },
  ];
};
