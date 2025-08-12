import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from "../api/profile.api";
import { Postitem } from "./postitem";
import { Loading } from "../Commponet/loading";
import {Helmet} from "react-helmet";

export default function Profile() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getUserProfile(id),
  });

  if (isLoading) return <Loading />;

  if (isError || !data) {
    return <div>Error loading profile.</div>;
  }

  console.log(data.posts); // Now it's safe!

  return (
    <>
     <Helmet>
        <title>My profile</title>
        <meta name='description' content="Helmet application"></meta>
      </Helmet>
      {data.posts?.map((current, index) => (
        <Postitem key={index} post={current} />
      ))}
    </>
  );
}
