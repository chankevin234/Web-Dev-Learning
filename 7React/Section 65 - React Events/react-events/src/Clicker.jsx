// function handleClick() {
//   console.log("CLICKED THE BUTTON!!!");
// }

// function handleHover() {
//   console.log("HOVERED!!");
// }

// export default function Clicker() {
//   return (
//     <div>
//       <p onMouseOver={handleHover}>Hover Over Me</p>
//       <button onClick={handleClick}>Click</button>
//       <button
//         onClick={() =>
//           console.log("CLICKED THE INLINE ARROW FUNCTION VERSION!")
//         }
//       >
//         Inline Function (CLICK ME!)
//       </button>
//     </div>
//   );
// }

// eslint-disable-next-line react/prop-types
export default function Clicker({message, buttonText}) {
  const handleClick = () => {
    console.log(message);
    alert(message)
  }

  return (
    <div>
      <p>Click the button</p>
      <button 
        onClick={handleClick}
      >
        {buttonText}
        </button>
    </div>
  )
}
