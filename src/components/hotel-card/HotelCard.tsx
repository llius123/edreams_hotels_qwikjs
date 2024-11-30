import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

const HotelCard = component$(() => {
  const nav = useNavigate();

  return (
    <div class="card bg-base-100 h-52 shadow-xl">
      <div class="card-body flex w-full">
        <h2 class="card-title basis-2/4">Card</h2>
        <div class="flex basis-2/4 place-items-end justify-end">
          <button class="btn btn-secondary " onClick$={() => nav("/details")}>
            Go to details
          </button>
        </div>
      </div>
    </div>
  );
});
export default HotelCard;
