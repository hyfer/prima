import { tw } from "@utils/tw";

const classes = {
  container: tw`absolute inset-0 -z-10 h-[40vh] w-full`,
  background: tw`animate-background h-full w-full bg-gradient-to-r from-turquoise-500 via-lavender-500 to-rose-500 bg-[length:600%_600%] [clip-path:polygon(0_0,100%_0%,100%_35%,0%_100%)]`,
};

const Background = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
    </div>
  );
};

export { Background };
