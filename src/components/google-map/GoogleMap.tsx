import { $, component$, useSignal } from "@builder.io/qwik";

const GoogleMap = component$(() => {
  const dialog = useSignal<HTMLDialogElement>();

  const openModal = $(() => {
    dialog.value?.showModal();
  });

  const closeModal = $(() => {
    dialog.value?.close();
  });

  return (
    <>
      <div class="card bg-base-100 h-52 shadow-xl" onClick$={openModal}>
        <div class="card-body">
          <h2 class="card-title">Google map</h2>
        </div>
      </div>
      <dialog ref={dialog} class="modal ">
        <div class="modal-box flex h-5/6 flex-col">
          <button class="btn" onClick$={closeModal}>
            Close
          </button>
          Google map
        </div>
      </dialog>
    </>
  );
});
export default GoogleMap;
