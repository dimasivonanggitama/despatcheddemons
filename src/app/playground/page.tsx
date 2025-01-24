"use client"

import { useRef, useState} from 'react';

export default function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const refValue = useRef("");
  // const firstRender = useRef(true)

  // useEffect(() => {
  //   count.current = count.current + 1;
  // }, []);

  const bgColor = "bg-blue-500"
  
  const [hoverBgColor, setHoverBgColor] = useState("this is hoverBgColor default value");
  const [activeBgColor, setActiveBgColor] = useState("this is activeBgColor default value");
  const firstRender = useRef(true)
  // let activeBgColor = useRef("bg-")
  // let hoverBgColor = useRef("bg-")

  if (firstRender.current) {
      let numbers: string = ""
      let basicColor: string = ""
      let endOfFindingBasicColor: number = bgColor.length
      for(let i = 0; i < bgColor.length; i++) {
          if (i > 2 && i < endOfFindingBasicColor) {
              basicColor += bgColor[i]
              if (bgColor[i + 1] === "-") {
                  endOfFindingBasicColor = i
              }
          }
          if (!isNaN(parseInt(bgColor[i]))) {
              numbers += bgColor[i]
              console.log(`i: ${i} , numbers: ${numbers}`)
          }
      }
      console.log("basicColor = "+basicColor)
      console.log("hover = hover:bg-" + basicColor + "-" + (parseInt(numbers) + 200))
      console.log("active = active:bg-" + basicColor + "-" + (parseInt(numbers) + 400))
      // setHoverBgColor("jhehe")
      // setActiveBgColor("frist activeBgColor change")
      setHoverBgColor(String("hover:bg-" + basicColor + "-" + (parseInt(numbers) + 200)))
      setActiveBgColor(String("active:bg-" + basicColor + "-" + (parseInt(numbers) + 400)))
      console.log("------------this is playground--------------------")
      console.log("hoverBgColor = "+hoverBgColor)
      console.log("activeBgColor = "+activeBgColor)
      // let activeBgColor = ""
      // let hoverBgColor = ""
      // switch(bgColor) {
      //     case "bg-blue-500":
      //         activeBgColor = "active:bg-blue-900"
      //         hoverBgColor = "hover:bg-blue-700"
      //     default:

      // }
      console.log("'active:bg-blue-900' === activeBgColor? " + ("active:bg-blue-900" ===  activeBgColor))
      firstRender.current = false
      return;
  }

  console.log("inputValueUseState: "+inputValue)
  console.log("refValueUseRef: "+refValue.current)

  return (
    <>
      <input
        type="text"
        // value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='text-black'
      />
      <h1>Render Count: {count.current}</h1>

      
      {/* <button onClick={() => setStringValue(refValue.current)}>This is a Button</button> */}
      {/* <h1>Render Count: {stringValue}</h1> */}
      <h1>Render Count: {hoverBgColor}</h1>
      <h1>Render Count: {activeBgColor}</h1>
      <div className={`${bgColor} ${hoverBgColor} ${activeBgColor}`}>This is the result</div>
    </>
  );
}
