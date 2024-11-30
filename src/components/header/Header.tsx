import { component$ } from "@builder.io/qwik";
import Dialog from "../dialog/Dialog";

const Header = component$(() => {
  return (
    <div class="flex w-full justify-end">
      <Dialog />
    </div>
  );
});
export default Header;
