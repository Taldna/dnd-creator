export default function Title({name, className}: {name: string, className?: string}) {
    return <h1 className={`text-4xl font-bold border-b-4 border-b-red-800 ${className}`}>{name}</h1>
}