import { tw } from "@utils/tw";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { DropdownIndicatorProps, components } from "react-select";
import { ShowSearchOption } from "./show-search-option-label";

const classes = {
  icon: tw`size-6 text-black`,
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<ShowSearchOption, false>,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <HiMagnifyingGlass className={classes.icon} />
    </components.DropdownIndicator>
  );
};

export { DropdownIndicator };
