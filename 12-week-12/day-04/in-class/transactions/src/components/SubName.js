import {useContext} from 'react'
import {AppContext} from '../App';
import {NameContext} from './Name';

const SubName = (props) => {
  const {setName, name,setCount, count} = useContext(AppContext)
  const {prompt} = useContext(NameContext)
  return (
    <>
    {prompt}
      <input onChange={(e)=>setName(e.target.value) }/>
      <button onClick={()=>setCount(count + 1)}>Click</button>
    </>
  )
}
export default SubName
