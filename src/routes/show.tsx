import { Pill } from "@components/pill";
import { ShowResponse } from "@internal-types/show-response";
import { DateTime } from "luxon";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Show = () => {
  // Type asserted since useLoaderData isn't type safe
  const data = useLoaderData() as ShowResponse;
  const premiered =
    data.premiered && DateTime.fromISO(data.premiered).toFormat("yyyy");
  const ended = data.ended && DateTime.fromISO(data.ended).toFormat("yyyy");

  const summaryElement = document.createElement("div");
  summaryElement.innerHTML = data.summary;
  const summary = summaryElement.textContent || summaryElement.innerText || "";

  const stars = data._embedded.cast.slice(0, 3);

  return (
    <>
      <div className="relative top-[20vh] w-full">
        <h1 className="text-4xl font-bold text-black md:-ml-1 md:text-8xl">
          {data.name}
        </h1>
        <div className="flex gap-2 text-lg font-bold text-black">
          {`${premiered} ${ended && premiered !== ended ? `- ${ended}` : ""}`}
          <small>({data._embedded.episodes.length} Episodes)</small>
        </div>
        <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-white p-4 drop-shadow-lg">
          <div className="flex flex-row gap-2">
            <div className="flex min-w-24 max-w-24 flex-auto">
              {data.image && (
                <img
                  src={data.image.original}
                  className="rounded-2xl drop-shadow-lg"
                />
              )}
              {!data.image && (
                <div className="flex aspect-[2/3] w-full items-center justify-center rounded-2xl bg-black/10">
                  <MdLocalMovies className="h-16 w-16" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {data.genres.length && (
                <div className="flex flex-row flex-wrap gap-1">
                  {data.genres.map((genre) => (
                    <Pill value={genre} />
                  ))}
                </div>
              )}
              {data.rating.average && (
                <div className="flex items-center gap-1">
                  <HiOutlineHandThumbUp className="relative top-px" />
                  <div className="text-xl font-bold">{data.rating.average}</div>
                </div>
              )}
              {data._embedded.cast.length && (
                <div className="mt-auto flex flex-col">
                  <div className="text-xs font-semibold uppercase">Stars</div>
                  <div className="flex flex-wrap">
                    {stars.map((cast, index) => (
                      <div>
                        <p className="text-lavender-500">
                          {cast.person.name}
                          {index !== stars.length - 1 && (
                            <small className="mx-2 font-bold text-black">
                              ·
                            </small>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">{summary}</div>
        </div>
      </div>
    </>
  );
};

export { Show };
