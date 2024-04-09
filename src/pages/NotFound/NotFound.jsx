import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LinkStl, NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      navigate("/");
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, navigate]);

  return (
    <>
      <NotFoundText>Page not found!</NotFoundText>
      <NotFoundWrapper>
        Go to <LinkStl to="/">home page&nbsp;</LinkStl>or wait for automatic
        redirection {seconds}
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
