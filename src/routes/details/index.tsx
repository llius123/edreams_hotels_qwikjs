import { component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div class="flex h-full basis-full flex-row">
      <button class="btn btn-secondary " onClick$={() => nav("/results")}>
        Go to Results
      </button>
      Details
    </div>
  );
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
