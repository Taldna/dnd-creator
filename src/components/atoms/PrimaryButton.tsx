export default function PrimaryButton({children, onClick}: {children: React.ReactNode, onClick: () => void}) {
    return (
        <button onClick={onClick} className="absolute bottom-6 w-xs h-fit px-6 py-3 rounded-full bg-red-800 text-xl font-semibold transition ease-in hover:bg-red-600 hover:scale-110">
            {children}
        </button>
    )
}