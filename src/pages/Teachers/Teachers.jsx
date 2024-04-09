import { useEffect, useState } from "react";

import {
  selectFilters,
  selectTeachers,
  selectVisibleTeach,
  selectorLoadMore,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { CardTeacher } from "../../components/CardTeacher/CardTeacher";
import { TeachFilter } from "../../components/TeachFilter/TeachFilter";
import { LoadMore } from "../../components/Buttons/LoadMore/LoadMore";

import { fetchAllTeachers, fetchTeachers } from "../../firebase/getTeachers";
import { NoData } from "./Teachers.styled";

function Teachers() {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);

  const isLoadMore = useSelector(selectorLoadMore);
  const filters = useSelector(selectFilters);
  const filteredTeachers = useSelector(selectVisibleTeach);

  const [amountCard, setAmountCard] = useState(4);

  useEffect(() => {
    fetchTeachers(dispatch, amountCard);
    fetchAllTeachers(dispatch);
  }, [dispatch, amountCard]);

  const handleLoadMore = () => {
    setAmountCard((prevPage) => prevPage + 4);
  };

  return (
    <div style={{ width: "1184px", margin: "0 auto", marginBottom: "32px" }}>
      <TeachFilter />
      <ul>
        {filters.language === "" &&
        filters.level === "" &&
        filters.price === "" ? (
          teachers.map((teacher) => (
            <CardTeacher key={teacher.id} teacher={teacher}></CardTeacher>
          ))
        ) : (
          <>
            {filteredTeachers.length === 0 ? (
              <NoData>No result</NoData>
            ) : (
              filteredTeachers.map((teacher) => (
                <CardTeacher key={teacher.id} teacher={teacher}></CardTeacher>
              ))
            )}
          </>
        )}
      </ul>
      {isLoadMore && <LoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
}

export default Teachers;
