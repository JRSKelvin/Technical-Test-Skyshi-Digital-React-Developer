import React from 'react'

type ComponentProps = {
  openVisible: boolean
  description: string | null
  highlightDescription: string | null
  handleClickYes: () => void
  handleClickNo: () => void
}

const ConfirmModalComponent = ({ openVisible, description, highlightDescription, handleClickYes, handleClickNo }: ComponentProps) => {
  return (
    <React.Fragment>
      {openVisible ? (
        <React.Fragment>
          <div data-te-modal-init="true" className="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-slate-900 bg-opacity-50 transition-opacity" id="modalDelete"></div>
          <div data-cy="modal-delete" className="pointer-events-none w-auto opacity-100 transition-all duration-300 ease-in-out mx-auto max-w-[320px] md:max-w-[490px] fixed z-[1056] inset-x-0 top-1/2 -translate-y-1/2">
            <div className="sm:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-xl border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div className="relative flex-auto flex flex-col gap-[26px] p-5 md:p-10">
                <div className="flex flex-col gap-2 items-center">
                  <p data-cy="modal-delete-title" className="text-center font-medium text-sm md:text-lg my-7 md:my-8">
                    {description ? description : 'Apakah Anda Yakin'} <span className="font-bold">{highlightDescription ? `"${highlightDescription}"` : ''}</span>?
                  </p>
                  <div className="inline-flex gap-5">
                    <button data-cy="modal-delete-cancel-button" type="button" className="flex items-center text-xs md:text-lg font-semibold rounded-full px-[15px] md:px-7 py-2 md:py-3 disabled:bg-opacity-20 bg-secondary text-darkBrown" aria-label="Close" onClick={handleClickNo}>
                      Batal
                    </button>
                    <button data-cy="modal-delete-confirm-button" type="button" className="flex items-center text-xs md:text-lg font-semibold rounded-full px-[15px] md:px-7 py-2 md:py-3 disabled:bg-opacity-20 bg-[#ED4C5C] text-white" onClick={handleClickYes}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}

export default ConfirmModalComponent
