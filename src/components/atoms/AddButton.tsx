export default function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-lg bg-gray-700 border-2 border-gray-500 text-3xl font-bold transition ease-in hover:bg-gray-600 hover:scale-90 cursor-pointer flex items-center justify-center leading-none pb-1.5"
    >
      +
    </button>
  )
}
