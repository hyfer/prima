import { tw } from "@utils/tw";
import { DateTime } from "luxon";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";

interface ShowSearchOption {
  label: string;
  value: number;
  image: string | null;
  year: string | null;
  rating: number | null;
}

const classes = {
  option: {
    container: tw`flex h-20 flex-row`,
    image: {
      container: tw`flex`,
      image: tw`flex aspect-[57/80] h-full w-full items-center justify-center rounded-md bg-black/10`,
      icon: tw`h-8 w-8`,
    },
    text: {
      container: tw`flex flex-col gap-1 pl-4`,
      name: tw`text-base font-semibold`,
      year: tw`text-sm`,
      rating: {
        container: tw`flex flex-row gap-1`,
        icon: tw`relative top-0.5 h-4 w-4`,
        text: tw`text-sm`,
      },
    },
  },
};

const ShowSearchOptionLabel = ({
  label,
  image,
  year,
  rating,
}: ShowSearchOption) => (
  <div className={classes.option.container}>
    <div className={classes.option.image.container}>
      {image && <img className={classes.option.image.image} src={image} />}
      {!image && (
        <div className={classes.option.image.image}>
          <MdLocalMovies className={classes.option.image.icon} />
        </div>
      )}
    </div>
    <div className={classes.option.text.container}>
      <div className={classes.option.text.name}>{label}</div>
      <div className={classes.option.text.year}>
        {(year && DateTime.fromISO(year).toFormat("yyyy")) || "Unknown"}
      </div>
      {rating && (
        <div className={classes.option.text.rating.container}>
          <>
            <HiOutlineHandThumbUp className={classes.option.text.rating.icon} />
            <div className={classes.option.text.rating.text}>{rating}</div>
          </>
        </div>
      )}
    </div>
  </div>
);

export { ShowSearchOptionLabel };
export type { ShowSearchOption };
