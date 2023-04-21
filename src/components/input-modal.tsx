/* eslint-disable no-unused-vars */
import React from 'react'
import { ArrowDownIcon } from './custom-icon'

type ComponentProps = {
  openVisible: boolean
  id: number | string
  title: string
  priority: string
  handleClickYes: (id: number | string, title: string, priority: string) => void
  handleClickNo: (id: number | string, title: string, priority: string) => void
}

export const InputModalAddComponent = ({ openVisible, title, priority, handleClickYes, handleClickNo }: ComponentProps) => {
  const [titleInput, setTitleInput] = React.useState(title)
  const [priorityInput, setPriorityInput] = React.useState({ view: 'Pilih Priority', value: priority })
  const [showDropdownPriority, setShowDropdownPriority] = React.useState(false)

  const submitButton = () => {
    handleClickYes(0, titleInput, priorityInput.value)
  }

  const closeButton = () => {
    handleClickNo(0, titleInput, priorityInput.value)
  }

  return (
    <React.Fragment>
      {openVisible ? (
        <React.Fragment>
          <div className="undefined transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen opacity-50" data-te-backdrop-show=""></div>
          <div data-te-modal-init="true" className="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ display: 'block' }} aria-modal="true" role="dialog" data-te-open="true">
            <div data-te-modal-dialog-ref="true" className="pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto mt-20 min-[576px]:max-w-[800px] px-5 transform-none opacity-100">
              <form data-cy="modal-add" className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 data-cy="modal-add-title" className="text-lg font-medium leading-normal text-neutral-800" id="exampleModalLabel">
                    Tambah List Item
                  </h5>
                  <button data-cy="modal-add-close-button" type="button" className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss="true" aria-label="Close" onClick={closeButton}>
                    <ArrowDownIcon />
                  </button>
                </div>
                <div className="relative flex-auto flex flex-col gap-[26px] p-4 md:px-[30px] md:py-7" data-te-modal-body-ref="true">
                  <div className="flex flex-col gap-2">
                    <label data-cy="modal-add-name-title" className="text-dark font-semibold text-xs">
                      Name List Item
                    </label>
                    <input data-cy="modal-add-name-input" type="text" name="name" id="" placeholder="Tambahkan nama list item" className="placeholder:text-[#A4A4A4] text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label data-cy="modal-add-priority-title" className="text-dark font-semibold text-xs">
                      Name List Item
                    </label>
                    <div className="relative w-max" data-te-dropdown-ref="true">
                      <button data-cy="modal-add-priority-dropdown" className="flex w-40 items-center whitespace-nowrap transition duration-150 ease-in-out text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200 capitalize group" type="button" id="dropDownPriority" data-te-dropdown-toggle-ref="true" aria-expanded="false" data-te-dropdown-animation="off" data-dropdown-toggle="dropdown" onClick={() => setShowDropdownPriority((oldValue) => !oldValue)}>
                        <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 hidden"></span>
                        {priorityInput.view}
                      </button>
                      <ul className={`absolute z-[1000] float-left m-0 w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-sm md:text-base shadow-lg [&amp;[data-te-dropdown-show]]:block divide-y divide-[#e5e5e5] ${showDropdownPriority ? 'block' : 'hidden'}`} aria-labelledby="dropDownPriority" id="dropdown" data-te-dropdown-menu-ref="true">
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Very High', value: 'very-high' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-red-500"></span>
                            very high
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'High', value: 'high' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-yellow-500"></span>
                            high
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Medium', value: 'normal' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-green-500"></span>
                            Medium
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Low', value: 'low' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-blue-500"></span>
                            low
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Very Low', value: 'very-low' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-purple-500"></span>
                            very low
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 disabled:bg-opacity-20">
                  <div data-te-modal-dismiss="true">
                    <button data-cy="modal-add-save-button" type="button" className="flex items-center bg-sky-500 text-xs md:text-lg font-semibold rounded-full px-[15px] md:px-7 py-2 md:py-3 disabled:bg-opacity-20 bg-skyBlue text-white" onClick={submitButton}>
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}

export const InputModalEditComponent = ({ openVisible, id, title, priority, handleClickYes, handleClickNo }: ComponentProps) => {
  const [idInput, setIdInput] = React.useState(id)
  const [titleInput, setTitleInput] = React.useState(title)
  const [priorityInput, setPriorityInput] = React.useState({ view: 'Pilih Priority', value: priority })
  const [showDropdownPriority, setShowDropdownPriority] = React.useState(false)

  React.useEffect(() => {
    setIdInput(id)
    setTitleInput(title)
    let priorityName = ''
    switch (priority) {
      case 'very-high': {
        priorityName = 'Very High'
        break
      }
      case 'high': {
        priorityName = 'High'
        break
      }
      case 'medium': {
        priorityName = 'Medium'
        break
      }
      case 'low': {
        priorityName = 'Low'
        break
      }
      case 'very-low': {
        priorityName = 'Very Low'
        break
      }
    }
    setPriorityInput({ view: priorityName, value: priority })
  }, [id, title, priority])

  const submitButton = () => {
    handleClickYes(idInput, titleInput, priorityInput.value)
  }

  const closeButton = () => {
    handleClickNo(idInput, titleInput, priorityInput.value)
  }

  return (
    <React.Fragment>
      {openVisible ? (
        <React.Fragment>
          <div className="undefined transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen opacity-50" data-te-backdrop-show=""></div>
          <div data-te-modal-init="true" className="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ display: 'block' }} aria-modal="true" role="dialog" data-te-open="true">
            <div data-te-modal-dialog-ref="true" className="pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto mt-20 min-[576px]:max-w-[800px] px-5 transform-none opacity-100">
              <form data-cy="modal-add" className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                  <h5 data-cy="modal-add-title" className="text-lg font-medium leading-normal text-neutral-800" id="exampleModalLabel">
                    Edit Item
                  </h5>
                  <button data-cy="modal-add-close-button" type="button" className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss="true" aria-label="Close" onClick={closeButton}>
                    <ArrowDownIcon />
                  </button>
                </div>
                <div className="relative flex-auto flex flex-col gap-[26px] p-4 md:px-[30px] md:py-7" data-te-modal-body-ref="true">
                  <div className="flex flex-col gap-2">
                    <label data-cy="modal-add-name-title" className="text-dark font-semibold text-xs">
                      Name List Item
                    </label>
                    <input data-cy="modal-add-name-input" type="text" name="name" id="" placeholder="Tambahkan nama list item" className="placeholder:text-[#A4A4A4] text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label data-cy="modal-add-priority-title" className="text-dark font-semibold text-xs">
                      Name List Item
                    </label>
                    <div className="relative w-max" data-te-dropdown-ref="true">
                      <button data-cy="modal-add-priority-dropdown" className="flex w-40 items-center whitespace-nowrap transition duration-150 ease-in-out text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200 capitalize group" type="button" id="dropDownPriority" data-te-dropdown-toggle-ref="true" aria-expanded="false" data-te-dropdown-animation="off" data-dropdown-toggle="dropdown" onClick={() => setShowDropdownPriority((oldValue) => !oldValue)}>
                        <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 hidden"></span>
                        {priorityInput.view}
                      </button>
                      <ul className={`absolute z-[1000] float-left m-0 w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-sm md:text-base shadow-lg [&amp;[data-te-dropdown-show]]:block divide-y divide-[#e5e5e5] ${showDropdownPriority ? 'block' : 'hidden'}`} aria-labelledby="dropDownPriority" id="dropdown" data-te-dropdown-menu-ref="true">
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Very High', value: 'very-high' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-red-500"></span>
                            very high
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'High', value: 'high' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-yellow-500"></span>
                            high
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Medium', value: 'normal' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-green-500"></span>
                            Medium
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Low', value: 'low' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-blue-500"></span>
                            low
                          </a>
                        </li>
                        <li>
                          <a data-cy="modal-add-priority-item" className="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize" href="#" data-te-dropdown-item-ref="true" onClick={() => setPriorityInput({ view: 'Very Low', value: 'very-low' })}>
                            <span className="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5 bg-purple-500"></span>
                            very low
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 disabled:bg-opacity-20">
                  <div data-te-modal-dismiss="true">
                    <button data-cy="modal-add-save-button" type="button" className="flex items-center bg-sky-500 text-xs md:text-lg font-semibold rounded-full px-[15px] md:px-7 py-2 md:py-3 disabled:bg-opacity-20 bg-skyBlue text-white" onClick={submitButton}>
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}
