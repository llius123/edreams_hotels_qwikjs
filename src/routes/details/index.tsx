import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div class="flex h-full basis-full flex-row">Details</div>;
});

export const head: DocumentHead = {
  title: "Hotel details",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
