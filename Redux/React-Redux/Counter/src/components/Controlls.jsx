import React,{useRef} from 'react'
import { useDispatch  } from 'react-redux'

function Controlls() {
  const dispatch = useDispatch()
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" })
  }

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  const handleAdd = () =>{
  
    dispatch({ type: "ADD",payload:{
      num:  inputElement.current.value,    } })

      inputElement.current.value=""
  }

  const handleSub = () =>{
  
    dispatch({ type: "SUB",payload:{
      num:  inputElement.current.value,    } })

      inputElement.current.value=""
  }

  const handlePrivacyToggle = () =>{
  
    dispatch({ type: "PRIVACYTOGGLE",payload:{
      num:  inputElement.current.value,    } })

      inputElement.current.value=""
  }

  return (
    <>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-danger btn-lg px-4 gap-3" onClick={handleDecrement}> - 1 </button>
        <button type="button" class="btn btn-success btn-lg px-4" onClick={handleIncrement}> + 1 </button>
      </div>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
        <input type="text" ref={inputElement}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter a number' />
        <button type="button" class="btn btn-success btn-lg px-4" onClick={handleAdd} > Add</button>
        <button type="button" class="btn btn-danger btn-lg px-4" onClick={handleSub} > Sub</button>

      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
      <button type="button" class="btn btn-warning btn-lg px-4" onClick={handlePrivacyToggle} > Privacy Toggle</button>

      </div>
    </>
  )
}

export default Controlls
