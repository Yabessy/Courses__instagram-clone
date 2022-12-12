import { useRecoilState } from "recoil"
import { modalState } from "../atom/modalAtom"
import { CameraIcon } from "@heroicons/react/24/outline"
// @ts-ignore
import Modal from "react-modal"
import { useRef, useState } from "react"

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const [selectedFile, setSelectedFile] = useState(null)
  function addImagePost(event: any) {
    const reader = new FileReader()
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
    reader.onload = (readerEvent) => {
      // @ts-ignore
      setSelectedFile(readerEvent.target?.result)
    }
  }
  const filePickerRef = useRef(null)
  return (
    <div className="w-screen h-screen">
      UploadModal
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[350px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white ring-0 border-2 rounded shadow-md"
          isOpen={open}
          onRequestClose={() => {setOpen(false); setSelectedFile(null)}}
        >
          <div className="flex flex-col h-full justify-center items-center p-6">
            {selectedFile ? (
              <img
                onClick={()=>setSelectedFile(null)}
                src={selectedFile}
                alt=""
                className="w-full max-h-[150px] object-contain cursor-pointer"
              />
            ) : (
              <CameraIcon
                // @ts-ignore
                onClick={() => filePickerRef.current.click()}
                className="h-14 cursor-pointer bg-red-200 p-2 rounded-full border-2 text-red-500"
              />
            )}
            <input type="file" hidden ref={filePickerRef} onChange={addImagePost} />
            <input
              type="text"
              maxLength={150}
              placeholder={`Please enter your caption..`}
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
