// Coleman logo — update this to match the actual Coleman brand mark
export default function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-5">
      <div className="h-7 w-7 rounded-md bg-primary" />
      <span className="text-sm font-semibold tracking-tight text-foreground">
        Coleman
      </span>
    </div>
  )
}
