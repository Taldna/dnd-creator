export default function Title({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <h1
      className={`text-4xl font-bold underline decoration-red-800 decoration-4 underline-offset-4 ${className}`}
    >
      {name}
    </h1>
  )
}
