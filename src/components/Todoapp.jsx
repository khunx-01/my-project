
import React, { useState } from 'react'

const Todoapp = () => {
    const [input, setInput] = useState();
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState();

const delitem = (item) =>{
    const update = list.filter((x) => x != item)
    setList(update)
}

    const additem = () =>{
    if(input){

        if(editIndex !== null){
            const update = list.map((x, index) =>index === editIndex ? input : x);
            setList(update);
            setEditIndex(null);
    }
        else{
        setList([...list, input]);
        }
        setInput('');}
        
        
    }
    const edititem = (index) =>{
        setInput(list[index]);
        setEditIndex(index);
    };
    return (
    <div className='container w-[60%] mx-auto'>
    <h1 className='text-center py-4 '>Todo app</h1>
    <div className='flex justify-between border shadow-md p-4 m-5  text-center '>
        <input type='text' placeholder='Enter your Todo  'className='w-full pl-10'onChange={(e)=>setInput(e.target.value)} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 m-2' onClick={additem}>{editIndex !== null ? 'update Todo' : 'Add Todo'}</button>
    </div>
      {
        list.map((item, index)=>{
            return(
                <div className='flex justify-between p-4'>
                    <p key={index}>{item}</p>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>delitem(item)} >Delete</button>
                    <button className='bg-indigo-500 ml-2 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>edititem(index)}>Edit</button>
                </div>
            )
          
        })
      }
    </div>
  )
}

export default Todoapp
