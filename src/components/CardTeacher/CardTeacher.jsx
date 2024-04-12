import ModalBookLesson from "../ModalBookLesson/ModalBookLesson";
import * as s from "./CardTeacher.styled";

import { useFavorite } from "../../hooks/useCard";

export const CardTeacher = ({ teacher }) => {
  const {
    checkingFavorite,
    showModal,
    isFavorite,
    handleShowModal,
    handleShowReviewers,
    showReviewers,
    handleLevelClick,
  } = useFavorite(teacher);

  return (
    <>
      <s.TeacherItem key={teacher.id}>
        <s.AvatartContainer>
          <s.AvatarImg src={teacher.avatar_url} alt={teacher.name} />
          <div>
            <s.StatusIcon>
              <use href="./images/icons.svg#status"></use>
            </s.StatusIcon>
          </div>
        </s.AvatartContainer>
        <div style={{ width: "968px" }}>
          <s.HeaderCardTeacherContainer>
            <s.Languages>Languages</s.Languages>
            <s.InfoContainer>
              <s.InfoText>
                <s.Icon>
                  <use href="./images/icons.svg#book-open"></use>
                </s.Icon>
                Lessons online
              </s.InfoText>
              <s.Divider></s.Divider>
              <s.LessonsDone>
                Lessons done:&nbsp;{teacher.lessons_done}
              </s.LessonsDone>
              <s.Divider></s.Divider>

              <s.Rating>
                <s.RatingIcon>
                  <use href="./images/icons.svg#star"></use>
                </s.RatingIcon>
                Rating:&nbsp;{teacher.rating}
              </s.Rating>
              <s.Divider></s.Divider>
              <s.PricePerHour>
                Price / 1 hour:&nbsp;
                <s.PricePerHourValue>
                  {teacher.price_per_hour}
                </s.PricePerHourValue>
              </s.PricePerHour>
            </s.InfoContainer>
            <s.HeartButton onClick={checkingFavorite}>
              <s.HeartIcon $isFavorite={isFavorite}>
                <use href="./images/icons.svg#heart"></use>
              </s.HeartIcon>
            </s.HeartButton>
          </s.HeaderCardTeacherContainer>
          <s.TeacherTitle>
            {teacher.name}&nbsp;{teacher.surname}
          </s.TeacherTitle>

          <s.AboutTeacherList>
            <s.AboutTeacher>
              <s.AboutLessonTitle>Speaks:&nbsp;</s.AboutLessonTitle>
              <s.UnderlinedContainer>
                {teacher.languages.length === 1
                  ? teacher.languages[0]
                  : teacher.languages.map((lang, index) => (
                      <s.AboutLessonValue key={index}>
                        {lang}
                        {index !== teacher.languages.length - 1 && ", "}
                      </s.AboutLessonValue>
                    ))}
              </s.UnderlinedContainer>
            </s.AboutTeacher>

            <s.AboutTeacher>
              <s.AboutLessonTitle>Lesson Info:&nbsp;</s.AboutLessonTitle>
              <s.AboutLessonValue>{teacher.lesson_info}</s.AboutLessonValue>
            </s.AboutTeacher>
            <s.AboutTeacher>
              <s.AboutLessonTitle>Conditions:&nbsp;</s.AboutLessonTitle>
              <s.AboutLessonValue>{teacher.conditions}</s.AboutLessonValue>
            </s.AboutTeacher>
          </s.AboutTeacherList>

          <s.TeacherExperience>{teacher.experience}</s.TeacherExperience>

          {showReviewers && (
            <div>
              <s.ReviewList>
                {teacher.reviews.map((review, index) => (
                  <s.ReviewItem key={index}>
                    <s.AvatarContainer>
                      <s.AvatarReview>{review.reviewer_name[0]}</s.AvatarReview>
                      <span>
                        <s.ReviewTitle>{review.reviewer_name}</s.ReviewTitle>
                        <s.ReviewRatingIconWrapper>
                          <s.RatingIcon>
                            <use href="./images/icons.svg#star"></use>
                          </s.RatingIcon>
                          <s.ReviewRatingValue>
                            {review.reviewer_rating}
                          </s.ReviewRatingValue>
                        </s.ReviewRatingIconWrapper>
                      </span>
                    </s.AvatarContainer>
                    <s.ReviewComment>{review.comment}</s.ReviewComment>
                  </s.ReviewItem>
                ))}
              </s.ReviewList>
            </div>
          )}
          <s.ReadMoreBtn onClick={handleShowReviewers}>Read more</s.ReadMoreBtn>

          <s.LevelingList>
            {teacher.levels.map((level, index) => (
              <s.LevelingItem key={index}>
                <s.LevelingText onClick={() => handleLevelClick(level)}>
                  #{level}
                </s.LevelingText>
              </s.LevelingItem>
            ))}
          </s.LevelingList>

          <s.BookTrialLessonBtn type="button" onClick={handleShowModal}>
            Book trial lesson
          </s.BookTrialLessonBtn>

          {showModal && (
            <ModalBookLesson
              teacher={teacher}
              isOpen={showModal}
              closeModal={handleShowModal}
            />
          )}
        </div>
      </s.TeacherItem>
    </>
  );
};
