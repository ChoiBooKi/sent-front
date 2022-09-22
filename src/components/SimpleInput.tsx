import React from "react";

type Title = {
  title: string;
};

type InputValue = {
  inputValue: string;
};

type Size = {
  size: number;
};

interface InputProps {
  title?: Title;
  inputValue?: InputValue;
  size?: Size;
}

export const SimpleInput = ({ title, inputValue, size }: InputProps) => (<>
  <div>{title?.title}</div>
  <input type="text" id="name" value={inputValue?.inputValue} />
</>)


// const SimpleInput = (props: InputProps) => {
//   const { title, inputValue, size } = props;
//   return <>
//     <div>{title}</div>
//     <input type="text" id="name" value={inputValue} />
//   </>;
// };

// export default SimpleInput;
