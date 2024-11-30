import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const dialog = useSignal<HTMLDialogElement>();

  const openModal = $(() => {
    dialog.value?.showModal();
  });

  const closeModal = $(() => {
    dialog.value?.close();
  });

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button class="btn" onClick$={openModal}>
        open modal
      </button>
      <dialog ref={dialog} class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          Todo: Refactor and send to the front only when click on the button
          <div class="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button class="btn" onClick$={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
});
