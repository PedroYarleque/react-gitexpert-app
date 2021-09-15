import React, { Dispatch, SetStateAction, useState } from "react";

interface Props{
    setCategories: Dispatch<SetStateAction<string[]>>;
}

type ChangeHandle = React.ChangeEvent<HTMLInputElement>;
type FormHandle = React.FormEvent<HTMLFormElement>;

export const AddCategory = ({setCategories}: Props) => {

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeHandle) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormHandle) => {
      e.preventDefault();

      if (inputValue.trim().length>2){
        setCategories(category=>[inputValue,...category,]);
        setInputValue('');
      }
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
