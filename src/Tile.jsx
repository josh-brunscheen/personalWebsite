// Full width tile
function Tile({topText, midText, butText}) {
  return (
    <div className="rounded mt-3 p-3 w-11/12 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="p-10"><b>{topText}</b></h1>
      <h1 className="p-10">{midText}</h1>
      //TODO: Buttons like this should be their own component that allows you to change the text
      <button className="bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-slate-50 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> {butText} </button>
    </div>
  )
}

export default Tile