import { get, getDatabase, ref, remove, set } from "firebase/database";
import { appFireBase } from "./firebase";
import { addFavoriteTeacher } from "../redux/TeachersSlice";
import { toast } from "react-toastify";

const db = getDatabase(appFireBase);

export const writeUserFavoriteItem = async (userId, data) => {
  try {
    const favoriteRef = ref(db, `/api/favorite/${userId}`);

    const snapshot = await get(favoriteRef);

    if (snapshot.exists()) {
      const existingData = snapshot.val();

      const isDuplicate = Object.values(existingData).some(
        (item) => item.id === data.id
      );

      if (!isDuplicate) {
        await set(favoriteRef, { ...existingData, [data.id]: data });
        toast.success("added");
      }
    } else {
      await set(favoriteRef, { [data.id]: data });
    }
  } catch (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
};

export const fetchUserFavoritesItem = async (dispatch, userId) => {
  try {
    const favoritesRef = ref(db, `/api/favorite/${userId}`);
    const snapshot = await get(favoritesRef);

    if (snapshot.exists()) {
      const favData = Object?.values(snapshot.val());
      dispatch(addFavoriteTeacher(favData));
      //   return;
    } else {
      toast.warning("No favorites found for this user.");
      return null;
    }
  } catch (error) {
    toast.error(error.message);

    throw new Error(error.message);
  }
};

export const removeUserFavoriteItem = async (userId, itemId) => {
  try {
    const favoriteItemRef = ref(db, `/api/favorite/${userId}/${itemId}`);
    await remove(favoriteItemRef);
    toast.success("removed successfully");
  } catch (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
};
