import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be found");
  }

  return data;
}

/// create or edit cabin
export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  // this is to check if the image is already uploaded to supabase storage
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // 0. Prepare image for upload to supabase storage
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // /storage/v1/object/public/cabin-images come from the supabase image storage

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
  // 2.uploade image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3. if there is an error uploading the image, delete the cabin
  if (storageError) {
    console.error(storageError);
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Image could not be uploaded and cabin could not be created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
