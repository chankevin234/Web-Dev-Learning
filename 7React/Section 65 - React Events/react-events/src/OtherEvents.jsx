function handleHover() {
  console.log("Hovered on me!")
}

export default function OtherEvents() {
  return (
    <div>
      <p>Click the button</p>
      <button 
        onMouseOver={handleHover}
      >
        Hover Me!
        </button>
    </div>
  )
}
