import { useRecoilState } from "recoil"
import { modalState } from "../atom/modalAtom"
// @ts-ignore
import Modal from "react-modal"

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      UploadModal
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-1/2 -translate-x-1/2 bg-white ring-0 border-2 rounded shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  )
}
