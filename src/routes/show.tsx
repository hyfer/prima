import { ShowResponse } from "@internal-types/show-response";
import { useLoaderData } from "react-router-dom";

const Show = () => {
  // Type asserted since useLoaderData isn't type safe
  const data = useLoaderData() as ShowResponse;

  return <div>{data.name}</div>;
};

export { Show };
