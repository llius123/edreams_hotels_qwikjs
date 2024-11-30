import { $, component$, useSignal } from "@builder.io/qwik";
import useFormValidator from "./useFormValidator";

const Dialog = component$(() => {
  const dialog = useSignal<HTMLDialogElement>();
  const emailRef = useSignal<HTMLInputElement>();
  const passwordRef = useSignal<HTMLInputElement>();

  const { hasEmailErrors, validateForm, hasPasswordErrors } =
    useFormValidator();

  const openModal = $(() => {
    dialog.value?.showModal();
  });

  const closeModal = $(() => {
    dialog.value?.close();
  });
  const login = $(() => {
    validateForm(emailRef.value?.value, passwordRef.value?.value);
  });

  const emailEmptyError = hasEmailErrors ? "input-error" : "";
  const passwordEmptyError = hasPasswordErrors ? "input-error" : "";

  return (
    <>
      <button class="btn" onClick$={openModal}>
        open modal
      </button>
      <dialog ref={dialog} class="modal">
        <div class="modal-box flex flex-col">
          <div class="flex flex-row">
            <h3 class="text-lg font-bold">Hello!</h3>
            <button class="btn" onClick$={closeModal}>
              Close
            </button>
          </div>
          <div>
            Todo: Refactor and send to the front only when click on the button
          </div>
          <div>
            <div class="label">
              <span class="label-text">Email</span>
            </div>
            <input
              type="email"
              class={`input input-bordered w-full max-w-xs ${emailEmptyError}`}
              ref={emailRef}
            />
            <div class="label">
              <span class="label-text">Password</span>
            </div>
            <input
              type="password"
              class={`input input-bordered w-full max-w-xs ${passwordEmptyError}`}
              ref={passwordRef}
            />
          </div>
          <button class="btn" onClick$={login}>
            Send
          </button>
        </div>
      </dialog>
    </>
  );
});
export default Dialog;
