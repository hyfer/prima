import Logo from "@assets/prima.svg?react";
import { tw } from "@utils/tw";

const classes = {
  header: tw`container top-0 mx-auto flex h-24 items-center px-2 md:px-4`,
  logo: tw`w-16 text-white`,
};

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo className={classes.logo} />
    </div>
  );
};

export { Header };
