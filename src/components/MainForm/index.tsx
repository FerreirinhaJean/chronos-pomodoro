import { CirclePlayIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='task'
          labelText='Tarefa:'
          placeholder='Digite aqui'
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton>
          <CirclePlayIcon />
        </DefaultButton>
      </div>
    </form>
  );
}
