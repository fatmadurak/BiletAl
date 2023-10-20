
import { useQuery } from "react-query";
import { getAllFestivals } from "../../network/requests/FestivalServices";
import EventsGrid from "../../components/EventsGrid";
function Festival() {

  const { isLoading, error, data } = useQuery("festival", getAllFestivals);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <EventsGrid data={data} />
  )
}

export default Festival