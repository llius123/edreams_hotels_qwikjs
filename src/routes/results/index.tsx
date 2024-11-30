import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-full basis-full flex-row">
      <div class="basis-1/4 border border-red-400">laft pannel</div>
      <div class="basis-3/4 border border-red-400">center pannel</div>
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
