import { Background } from "@components/background";
import { Header } from "@components/header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <Background />
      <div className="container mx-auto px-2 md:px-4">
        <Outlet />
      </div>
    </>
  );
};

export { Root };
