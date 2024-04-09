import { Button } from "./LoadMore.styled";

export const LoadMore = ({ handleLoadMore }) => {
  return (
    <Button onClick={handleLoadMore} type="button">
      Load More
    </Button>
  );
};
