import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import GoogleMap from "~/components/google-map/GoogleMap";
import HotelCard from "~/components/hotel-card/HotelCard";
import SearchCity from "~/components/search-city/SearchCity";

export default component$(() => {
  return (
    <div class="flex h-full basis-full flex-row">
      <div class="basis-1/4">
        <SearchCity />
        <GoogleMap />
      </div>
      <div class="flex basis-3/4 flex-col gap-3 border border-red-400 ">
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hotel results",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
