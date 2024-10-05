function ImgCap({url, caption}) {
  return (
    <div className="w-full">
      <img src={url} className="p-10 w-full"></img>
      <p className="transition-all duration-500 text-sm text-slate-900 dark:text-slate-50">{caption}</p>
    </div>
  )
}

export default ImgCap