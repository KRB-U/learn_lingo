import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors";
import { CardTeacher } from "../../components/CardTeacher/CardTeacher";
import { useEffect } from "react";
import { fetchUserFavoritesItem } from "../../firebase/favorite";
import { getAuth } from "firebase/auth";
import { appFireBase } from "../../firebase/firebase";

const auth = getAuth(appFireBase);

function Favorite() {
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const user = auth.currentUser;

  useEffect(() => {
    fetchUserFavoritesItem(dispatch, user.uid);
  }, [dispatch, user.uid]);

  return (
    <ul style={{ width: "1184px", margin: "0 auto" }}>
      {favorite.map((teacher) => (
        <CardTeacher teacher={teacher} />
      ))}
    </ul>
  );
}
export default Favorite;
