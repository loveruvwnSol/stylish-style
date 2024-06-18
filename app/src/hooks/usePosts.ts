import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

export const usePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data, error } = await supabase.from("posts").select();
    if (!error) setPosts(data);
    else alert(error.message);
  };

  const uploadPost = async (
    user_id: string | undefined,
    brand_name: string,
    text: string,
    file: File
  ) => {
    const { error } = await supabase
      .from("posts")
      .insert({ user_id: user_id, brand_name: brand_name, text: text })
      .select();
    if (error) alert(error.message);
    else {
      const { data: allPostsLength } = await supabase.from("clothes").select();
      const { error } = await supabase.storage
        .from("posts")
        .upload(allPostsLength?.length + "/image", file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) alert(error.message);
      else alert("upload your post");
    }
  };

  const deletePost = async (id: number) => {
    const response = await supabase.from("posts").delete().eq("id", id);
    const { data, error } = await supabase.from("posts").select();
    if (!error) {
      setPosts(data);
      const { error } = await supabase.storage
        .from("posts")
        .remove([id + "/image"]);
      if (error) {
        alert(error.message);
      }
    } else {
      alert(error.message);
    }
  };

  const toggleLike = async (post_id: number, user_id: string | undefined) => {
    const { data } = await supabase
      .from("likes")
      .select()
      .eq("user_id", user_id)
      .eq("post_id", post_id);
    if (data?.length == 0 || !data) {
      const { data } = await supabase
        .from("likes")
        .insert({ user_id: user_id, post_id: post_id })
        .select();
    } else {
      const response = await supabase
        .from("likes")
        .delete()
        .eq("user_id", user_id)
        .eq("post_id", post_id);
    }
  };

  return [{ posts, uploadPost, deletePost, toggleLike }];
};
