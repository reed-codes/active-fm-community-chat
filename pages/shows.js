import React, { useContext, useEffect } from "react";
import ShowsCard from "../components/ShowCard";
import { ShowsContext } from "../state/ShowsContext";
import { scrollTop } from "../utils/index";

const shows = () => {
  const { shows } = useContext(ShowsContext);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <section className="d-flex flex-wrap justify-content-between">
      {shows.allShows.map((show, index) => (
        <ShowsCard key={index} show={show} />
      ))}
    </section>
  );
};

export default shows;
