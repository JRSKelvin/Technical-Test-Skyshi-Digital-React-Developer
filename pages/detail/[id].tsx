/* eslint-disable @next/next/no-img-element */
import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'
import ConfirmModalComponent from '@/src/components/confirm-modal'
import { FilterAZIcon, FilterIcon, FilterLatestIcon, FilterOldestIcon, FilterRoundIcon, FilterZAIcon } from '@/src/components/custom-icon'
import { InputModalAddComponent, InputModalEditComponent } from '@/src/components/input-modal'
import NavbarComponent from '@/src/components/navbar'

const DetailPage = () => {
  const [toDoData, setToDoData] = React.useState<any[]>([])
  const [showFilter, setShowFilter] = React.useState({ view: false, filterType: '' })
  const [showAdd, setShowAdd] = React.useState({ id: 0, view: false, title: '', priority: '' })
  const [showEdit, setShowEdit] = React.useState({ id: 0, view: false, title: '', priority: '' })
  const [showDelete, setShowDelete] = React.useState({ id: 0, view: false, title: '', priority: '' })
  const [showEditTitle, setShowEditTitle] = React.useState({ id: 0, view: false, title: '' })
  const [editTitle, setEditTitle] = React.useState('')
  const router = useRouter()
  const queryId = router.query.id
  const baseURL = 'https://todo.api.devcode.gethired.id'

  React.useEffect(() => {
    if (queryId) handleApiGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryId])

  const handleApiGetData = () => {
    axios.get(`${baseURL}/todo-items?activity_group_id=${queryId}`).then((res) => {
      setToDoData(res.data.data)
    })
    axios.get(`${baseURL}/activity-groups/${queryId}`).then((res) => {
      setShowEditTitle({
        id: parseInt(queryId?.toString() || '0'),
        view: false,
        title: res.data.title,
      })
      setEditTitle(res.data.title)
    })
  }

  const handleApiCreateData = (title: string, priority: string) => {
    const postData = {
      activity_group_id: parseInt(queryId?.toString() || '0'),
      title: title,
      priority: priority,
    }
    axios.post(`${baseURL}/todo-items`, postData).then(() => {
      handleApiGetData()
    })
  }

  const handleApiEditData = (detailId: number | string, title: string, priority: string) => {
    const patchData = { title: title, priority: priority }
    axios.patch(`${baseURL}/todo-items/${detailId}`, patchData).then(() => {
      handleApiGetData()
    })
  }

  const handleApiDeleteData = (detailId: number) => {
    axios.delete(`${baseURL}/todo-items/${detailId}`).then(() => {
      hideConfirmDelete()
      handleApiGetData()
    })
  }

  const handleApiCheckToDo = (detailId: number, checked: number) => {
    const patchData = { is_active: checked }
    axios.patch(`${baseURL}/todo-items/${detailId}`, patchData).then(() => {
      handleApiGetData()
    })
  }

  const handleApiEditTitle = () => {
    const patchData = { title: editTitle }
    axios.patch(`${baseURL}/activity-groups/${queryId}`, patchData).then(() => {
      handleApiGetData()
    })
  }

  const handleRedirectHome = () => {
    router.push('/')
  }

  const handleEditTitle = () => {
    setShowEditTitle((oldValue) => ({ ...oldValue, view: false }))
    if (showEditTitle.title != editTitle) {
      handleApiEditTitle()
    }
  }

  const handleViewAdd = () => {
    setShowAdd({ id: 0, view: true, title: '', priority: '' })
  }

  const handleViewEdit = (detailId: number, title: string, priority: string) => {
    setShowEdit({ id: detailId, view: true, title: title, priority: priority })
  }

  const showConfirmDelete = (detailId: number, title: string) => {
    setShowDelete({ id: detailId, view: true, title: title, priority: '' })
  }

  const hideConfirmDelete = () => {
    setShowDelete({ id: 0, view: false, title: '', priority: '' })
  }

  const handleFilter = (type: string) => {
    setShowFilter({ view: false, filterType: type })
    switch (type) {
      case 'latest': {
        return setToDoData((oldValue) => oldValue.sort((a, b) => b.id - a.id))
      }
      case 'oldest': {
        return setToDoData((oldValue) => oldValue.sort((a, b) => a.id - b.id))
      }
      case 'a-z': {
        return setToDoData((oldValue) =>
          oldValue.sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
          })
        )
      }
      case 'z-a': {
        return setToDoData((oldValue) =>
          oldValue.sort((a, b) => {
            if (a.title > b.title) return -1
            if (a.title < b.title) return 1
            return 0
          })
        )
      }
      case 'not-complete': {
        return setToDoData((oldValue) => oldValue.sort((a, b) => b.is_active - a.is_active))
      }
    }
  }

  const switchCasePriority = (priority: string) => {
    switch (priority) {
      case 'very-high': {
        return 'bg-red-500'
      }
      case 'high': {
        return 'bg-yellow-500'
      }
      case 'normal': {
        return 'bg-green-500'
      }
      case 'low': {
        return 'bg-blue-500'
      }
      case 'very-low': {
        return 'bg-purple-500'
      }
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>React Developer Technical | Kelvin Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfirmModalComponent openVisible={showDelete.view} description={'Apakah Anda Yakin Menghapus To Do'} highlightDescription={showDelete.title} handleClickNo={() => hideConfirmDelete()} handleClickYes={() => handleApiDeleteData(showDelete.id)} />
      <InputModalAddComponent
        id={''}
        openVisible={showAdd.view}
        title={''}
        priority={''}
        handleClickNo={() => {
          setShowAdd({ id: 0, view: false, title: '', priority: '' })
        }}
        handleClickYes={(id, title, priority) => {
          handleApiCreateData(title, priority)
        }}
      />
      <InputModalEditComponent
        id={showEdit.id}
        openVisible={showEdit.view}
        title={showEdit.title}
        priority={showEdit.priority}
        handleClickNo={() => {
          setShowEdit({ id: 0, view: false, title: '', priority: '' })
        }}
        handleClickYes={(id, title, priority) => {
          handleApiEditData(id, title, priority)
        }}
      />
      <NavbarComponent />
      <div className="layout ">
        <div className="flex items-center justify-between my-10">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="cursor-pointer" onClick={() => handleRedirectHome()}>
              <AiOutlineArrowLeft size={36} />
            </div>
            <div className="flex items-center space-x-2 md:space-x-3" onClick={() => setShowEditTitle((oldValue) => ({ ...oldValue, view: true }))}>
              <h2 data-cy="todo-title">
                {showEditTitle.view ? null : showEditTitle.title}
                {showEditTitle.view ? <input type="text" className="text-3xl bg-transparent border-gray-700 border-b-2 lg:w-80 focus:outline-none" value={editTitle} onBlur={() => handleEditTitle()} onChange={(e) => setEditTitle(e.target.value)} /> : null}
              </h2>
              <div>
                <AiOutlineEdit size={36} />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <span data-cy="todo-sort-button" onClick={() => setShowFilter((oldValue) => ({ ...oldValue, view: !oldValue.view }))}>
                <FilterRoundIcon />
              </span>
              {showFilter.view ? (
                <div className="relative">
                  <div className="absolute top-4 md:top-8 -left-56 md:-left-24 w-56 h-56">
                    <div data-cy="sort-parent" className="w-full h-full flex flex-col items-stretch justify-between rounded-lg divide-y border bg-white">
                      <button data-cy="sort-selection" className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100" onClick={() => handleFilter('latest')}>
                        <div data-cy={showFilter.filterType == 'latest' ? 'sort-selection-selected' : null}>
                          <span data-cy="sort-selection-icon" className="text-sky-500">
                            <FilterLatestIcon />
                          </span>
                          <span data-cy="sort-selection-title">Terbaru</span>
                          {showFilter.filterType == 'latest' ? <AiOutlineCheck className="absolute right-4 h-4 w-4 md:w-6 md:h-6" /> : null}
                        </div>
                      </button>
                      <button data-cy="sort-selection" className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100" onClick={() => handleFilter('oldest')}>
                        <div data-cy={showFilter.filterType == 'oldest' ? 'sort-selection-selected' : null}>
                          <span data-cy="sort-selection-icon" className="text-sky-500">
                            <FilterOldestIcon />
                          </span>
                          <span data-cy="sort-selection-title">Terlama</span>
                          {showFilter.filterType == 'oldest' ? <AiOutlineCheck className="absolute right-4 h-4 w-4 md:w-6 md:h-6" /> : null}
                        </div>
                      </button>
                      <button data-cy="sort-selection" className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100" onClick={() => handleFilter('a-z')}>
                        <div data-cy={showFilter.filterType == 'a-z' ? 'sort-selection-selected' : null}>
                          <span data-cy="sort-selection-icon" className="text-sky-500">
                            <FilterAZIcon />
                          </span>
                          <span data-cy="sort-selection-title">A-Z</span>
                          {showFilter.filterType == 'a-z' ? <AiOutlineCheck className="absolute right-4 h-4 w-4 md:w-6 md:h-6" /> : null}
                        </div>
                      </button>
                      <button data-cy="sort-selection" className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100" onClick={() => handleFilter('z-a')}>
                        <div data-cy={showFilter.filterType == 'z-a' ? 'sort-selection-selected' : null}>
                          <span data-cy="sort-selection-icon" className="text-sky-500">
                            <FilterZAIcon />
                          </span>
                          <span data-cy="sort-selection-title">Z-A</span>
                          {showFilter.filterType == 'z-a' ? <AiOutlineCheck className="absolute right-4 h-4 w-4 md:w-6 md:h-6" /> : null}
                        </div>
                      </button>
                      <button data-cy="sort-selection" className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100" onClick={() => handleFilter('not-complete')}>
                        <div data-cy={showFilter.filterType == 'not-complete' ? 'sort-selection-selected' : null}>
                          <span data-cy="sort-selection-icon" className="text-sky-500">
                            <FilterIcon />
                          </span>
                          <span data-cy="sort-selection-title">Belum Selesai</span>
                          {showFilter.filterType == 'not-complete' ? <AiOutlineCheck className="absolute right-4 h-4 w-4 md:w-6 md:h-6" /> : null}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div data-cy="todo-add-button" className="inline-flex items-center justify-center rounded-full  bg-sky-500 px-4 py-2 text-white h-[54px] w-[159px]" onClick={() => handleViewAdd()}>
              <div data-cy="tabler:plus" className="cursor-pointer">
                <AiOutlinePlus />
              </div>
              <button className="text-lg text-white fontpoppins font-semibold leading-7 " type="submit">
                Tambah
              </button>
            </div>
          </div>
        </div>
        <main className="pb-10">
          <div className="flex flex-col mt-7 md:mt-[50px] gap-y-[10px]">
            {toDoData.map((data, index) => {
              return (
                <div className="rounded-xl bg-white shadow-custom flex flex-col py-[18px] md:py-[26px] px-5 md:px-6 w-full" data-cy="todo-item" key={index}>
                  <div className="inline-flex items-center justify-between">
                    <div className="inline-flex gap-4 items-center">
                      <input type="checkbox" name="isFinish" id="aaCheckbox" checked={data.is_active == 1 ? false : true} onChange={() => handleApiCheckToDo(data.id, data.is_active == 1 ? 0 : 1)} className="hidden-box" data-cy="todo-item-checkbox" />
                      <span className={`md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full ${switchCasePriority(data.priority)}`} data-cy="todo-item-priority-indicator"></span>
                      <p data-cy="todo-item-title" className="font-medium text-sm md:text-lg">
                        {data.title}
                      </p>
                      <button type="button" className="w-3 md:w-6" onClick={() => handleViewEdit(data.id, data.title, data.priority)} data-te-toggle="modal" data-te-target="#exampleModal" data-cy="todo-item-edit-button">
                        <AiOutlineEdit />
                      </button>
                    </div>
                    <button type="button" className="w-4 md:w-6" onClick={() => showConfirmDelete(data.id, data.title)} data-cy="todo-item-delete-button">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          {toDoData.length == 0 ? (
            <div className="flex flex-col">
              <figure className="w-1/2 mx-auto cursor-pointer">
                <img data-cy="todo-empty-state" className="w-full object-contain aspect-square" alt="activity" src="/assets/no-todo.webp" />
              </figure>
            </div>
          ) : null}
        </main>
      </div>
    </React.Fragment>
  )
}

export default DetailPage
