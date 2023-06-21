import {useContext, createContext, useState} from 'react';
import {AppContext} from '../App';
import SubName from './SubName'

export const NameContext = createContext(null);

const Name = (props) => {
  const [prompt,setPrompt] = useState('asfasfdsf')
  const {name,count} = useContext(AppContext)
  return (
    <div>
      <h2>My Name: {name}</h2>
      <h1>{count}</h1>
      <NameContext.Provider value={{prompt}}>
        <SubName/>
      </NameContext.Provider>
    </div>
  )
}
export default Name
