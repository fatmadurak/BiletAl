import { useQuery } from "react-query";
import { getAllFestivals } from "../../network/requests/FestivalServices";
import EventsGrid from "../../components/EventsGrid";
import Slider from "../../components/Slider";
import PageWithHelmet from "../../components/PageWithHelmet";
import { useEffect } from "react";

function Festival() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { isLoading, error, data } = useQuery("festival", getAllFestivals);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const festival = "/festival";
  return (
    <>
      <PageWithHelmet title={"Festival-Bilet Al"} />
      <Slider />
      <EventsGrid data={data} linkPath={festival} />
    </>
  );
}

export default Festival;
