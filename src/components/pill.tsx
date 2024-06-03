import { tw } from "@utils/tw";

const classes = {
  pill: tw`rounded-full border border-lavender-700 px-2 py-1 text-xs text-lavender-700`,
};

const Pill = ({ value }: { value: string }) => {
  return <div className={classes.pill}>{value}</div>;
};

export { Pill };
