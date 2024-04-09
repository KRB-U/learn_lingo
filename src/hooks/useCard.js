import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../redux/selectors";
import { useState } from "react";
import { useLayoutEffect } from "react";

import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { appFireBase } from "../firebase/firebase";
import {
  removeUserFavoriteItem,
  writeUserFavoriteItem,
} from "../firebase/favorite";
import { removeFavoriteTeacher } from "../redux/TeachersSlice";

const auth = getAuth(appFireBase);

export const useFavorite = (teacher) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [showReviewers, setShowReviewers] = useState(false);
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const handleShowReviewers = () => {
    setShowReviewers((pS) => !pS);
  };

  const handleShowModal = () => {
    setShowModal((pS) => !pS);
  };

  const favorite = useSelector(selectFavorite);

  useLayoutEffect(() => {
    if (favorite.some((item) => item.id === teacher.id)) {
      setFavorite(true);
    }
  }, [favorite, teacher.id]);

  const checkingFavorite = () => {
    if (!user.uid) {
      toast.error("Please, Log In or register");
      return;
    }

    setFavorite(!isFavorite);

    if (isFavorite) {
      dispatch(removeFavoriteTeacher(teacher.id));
      removeUserFavoriteItem(user.uid, teacher.id);
      return;
    }

    writeUserFavoriteItem(user.uid, teacher);
  };

  return {
    checkingFavorite,
    showModal,
    isFavorite,
    handleShowModal,
    handleShowReviewers,
    showReviewers,
  };
};
