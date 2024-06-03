import { ShowSearch } from "@components/show-search";

const Home = () => {
  return (
    <>
      <div className="relative left-1/2 top-[20vh] w-full -translate-x-1/2 -translate-y-1/4 sm:max-w-2xl">
        <ShowSearch />
      </div>
    </>
  );
};

export { Home };
