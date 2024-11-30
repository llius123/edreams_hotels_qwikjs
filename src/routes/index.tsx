import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ redirect, url }) => {
  throw redirect(308, new URL("/results", url).toString());
};

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
