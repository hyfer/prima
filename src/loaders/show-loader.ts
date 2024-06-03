import { ShowResponse } from "@internal-types/show-response";
import { LoaderFunctionArgs } from "react-router-dom";

const showLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ShowResponse> => {
  const { showId } = params;

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/shows/${showId}?embed[]=episodes&embed[]=cast`,
  );

  if (response.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  return response.json();
};

export { showLoader };
