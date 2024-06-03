import { useFetch } from "@hooks/useFetch";
import { ShowSearchResponse } from "@internal-types/show-search-response";
import { tw } from "@utils/tw";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { ActionMeta, InputActionMeta, SingleValue } from "react-select";
import { DropdownIndicator } from "./components/dropdown-indicator";
import { LoadingMessage } from "./components/loading-message";
import {
  ShowSearchOption,
  ShowSearchOptionLabel,
} from "./components/show-search-option-label";

const classes = {
  control: tw`w-full rounded-full border border-black/5 bg-white p-6 drop-shadow-lg`,
  menuList: tw`top-2 flex flex-col gap-5 rounded-2xl border-black/5 bg-white p-6 drop-shadow-lg`,
  noOptionsMessage: tw`flex h-full w-full justify-center py-6 leading-10`,
};

const ShowSearch = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const { data, isLoading } = useFetch<ShowSearchResponse>({
    url: `https://api.tvmaze.com/search/shows?q=${searchValue}`,
    wait: 1000,
    shouldFetch: !!searchValue,
  });

  const onInputChange = (value: string, action: InputActionMeta) => {
    if (!!value) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }

    if (action.action === "input-change") {
      setSearchValue(value);
    }
  };

  const onChange = (
    newValue: SingleValue<ShowSearchOption>,
    actionMeta: ActionMeta<ShowSearchOption>,
  ) => {
    if (actionMeta.action === "select-option") {
      navigate(`/show/${newValue?.value}`);
    }
  };

  return (
    <Select
      placeholder="Search"
      formatOptionLabel={ShowSearchOptionLabel}
      styles={{
        menuList: (base) => ({ ...base, maxHeight: "fit-content" }),
        loadingIndicator(base) {
          return {
            ...base,
            display: "none",
          };
        },
      }}
      classNames={{
        control: () => classes.control,
        menuList: () => classes.menuList,
        noOptionsMessage: () => classes.noOptionsMessage,
      }}
      components={{ DropdownIndicator, LoadingMessage }}
      captureMenuScroll={false}
      isLoading={isLoading}
      onInputChange={onInputChange}
      options={data?.map(({ show }) => {
        return {
          value: show.id,
          label: show.name,
          image: show.image?.medium,
          year: show.premiered,
          rating: show.rating.average,
        };
      })}
      menuIsOpen={menuIsOpen}
      onChange={onChange}
      inputValue={searchValue}
      autoFocus={true}
      onFocus={() => (searchValue ? setMenuIsOpen(true) : setMenuIsOpen(false))}
      unstyled
    />
  );
};

export { ShowSearch };
