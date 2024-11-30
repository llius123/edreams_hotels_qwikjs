import { $, component$, useSignal } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

export interface City {
  id: number;
  name: string;
}

export const searchCityByName = server$((cityName: string): City[] => {
  const allCities = [
    {
      id: 1,
      name: "Madrid",
    },
    {
      id: 2,
      name: "Valencia",
    },
    {
      id: 3,
      name: "Barcelona",
    },
    {
      id: 4,
      name: "Sevilla",
    },
  ];
  return allCities.filter((city) => {
    if (city.name.toLowerCase().includes(cityName)) {
      return city;
    }
  });
});

const SearchCity = component$(() => {
  const resultCities = useSignal<City[]>([]);
  const inputText = useSignal<HTMLInputElement>();

  const searchByName = $(async () => {
    if (inputText.value?.value.length === 0) {
      resultCities.value = [];
      return;
    }
    const cities = await searchCityByName(inputText.value?.value as string);
    resultCities.value = cities;
  });
  return (
    <div>
      <label class="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          ref={inputText}
          type="text"
          class="grow"
          placeholder="Search"
          onInput$={searchByName}
        />
      </label>
      {resultCities.value.length > 0 && (
        <ul class="menu bg-base-200 rounded-box">
          {resultCities.value.map((item) => {
            return (
              <li>
                <a>{item.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});
export default SearchCity;
