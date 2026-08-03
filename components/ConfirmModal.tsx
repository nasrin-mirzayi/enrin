"use client";

type Props = {

    open: boolean;

    onClose: () => void;

    onConfirm: () => void;

};


export default function ConfirmModal({

    open,
    onClose,
    onConfirm

}: Props) {


    if (!open)
        return null;


    return (

        <div

            onClick={onClose}

            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

            <div

                role="dialog"

                aria-modal="true"

                onClick={
                    e => e.stopPropagation()
                }

                className="w-full max-w-md rounded-2xl
                bg-white dark:bg-zinc-900 dark:bg-zinc-900 p-6 space-y-5 shadow-xl">


                <h2 className="text-xl font-bold">

                    Delete Opportunity?

                </h2>

                <p className="text-gray-600 dark:text-gray-300">

                    This action cannot be undone.

                </p>

                <div className="flex justify-end gap-3">

                    <button

                        onClick={onClose}

                        className="px-4 py-2 border rounded-xl
                       hover:bg-gray-100 dark:hover:bg-zinc-800">

                        Cancel

                    </button>

                    <button

                        onClick={onConfirm}

                        className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">

                        Delete

                    </button>
                </div>
            </div>
        </div>
    );
}