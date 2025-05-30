const Skeleton = () => {
  return (
    <div className="flex flex-col flex-1 h-[440px] rounded-2xl bg-secondary">
      <div className="w-full h-[220px] bg-white-100 opacity-20 rounded-2xl animate-pulse"/>
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <div className="bg-white-100 opacity-20 w-32 h-6 animate-pulse rounded-full"></div>
          <div className="bg-white-100 opacity-20 w-48 h-8 animate-pulse rounded-full"></div>
        </div>
        <div className="bg-white-100 opacity-20 w-36 h-6 animate-pulse rounded-full"></div>
      </div>
    </div>
  )
}

export default Skeleton