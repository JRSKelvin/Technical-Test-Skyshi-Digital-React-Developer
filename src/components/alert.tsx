import React from 'react'
import { NotificationAlertIcon } from './custom-icon'

type ComponentProps = {
  description: string
  openVisible: boolean
}

const AlertComponent = ({ openVisible, description }: ComponentProps) => {
  return (
    <React.Fragment>
      {openVisible ? (
        <div data-cy="modal-information" className="fixed top-8 right-4 md:top-5 md:right-5 opacity-100 transition-opacity">
          <div className="pointer-events-auto mx-auto hidden w-96 max-w-full rounded-lg bg-white text-sm shadow-md shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden" id="toastTodoAlert" role="alert" aria-live="assertive" aria-atomic="true" data-te-autohide="true" data-te-toast-init="true" data-te-toast-show="true" data-te-animation="true" data-te-class-fade-in="true">
            <div className="flex items-center rounded-xl bg-white px-6 py-4">
              <NotificationAlertIcon />
              <p data-cy="modal-information-title" className="font-medium text-sm text-dark ml-[10px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default AlertComponent
