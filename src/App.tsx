import { ChangeEvent, useMemo, useRef, useState } from "react";

const App = () => {
  console.log("render"); // prints "render" multiples times in useState implementation

  const inputRef = useRef<HTMLInputElement>(null);

  const someValue = () => {
    console.log("some value calculated");
    return "some value calculated after computationally expensive operation";
  }; // prints "some value calculated" multiples times in useState implementation

  // const someValue = useMemo(() => {
  //   console.log("some value calculated");
  //   return "some value calculated after computationally expensive operation";
  // }, []); //useMemo Optimization

  // const [input, setInput] = useState<string | null>(null); // useState Implementation
  const validate = () => {
    //do something with your input
    if (inputRef.current) {
      alert(`${inputRef.current.value}`);
    }
    // alert(input) // useState Implementation
  };
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col gap-4 p-4">
        <input
          type="text"
          className="p-2 border rounded border-black"
          placeholder="email"
          ref={inputRef}
          // onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          //   setInput(e.target.value);
          // }} //useState Implementation
        />
        <button
          onClick={validate}
          className="px-4 py-2 rounded bg-white border border-black text-black hover:bg-black hover:text-white"
        >
          Validate & Submit
        </button>
      </div>
      <div className="border rounded p-2 border-gray-300 bg-slate-100">
        {someValue()}
        {/* {someValue} in useMemo Implementation  */}
      </div>
    </div>
  );
};

export default App;
