import {useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setinputValue] = useState('')

  const onInputChange = (evt) => {
    setinputValue(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddCategory(inputValue);
    setinputValue('')
  }

  return(
    <form onSubmit={(event) => onSubmit(event)}>

      <input
      type="text"
      placeholder="Caca"
      value={inputValue}
      onChange={(event ) => onInputChange(event)}
      />
    </form>
  )
}