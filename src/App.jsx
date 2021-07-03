import React, { useState }  from 'react';
import ToDoList  from './ToDoList';


const App = ()=>{
    const [inputList, setInputList] = useState(" ");
    const [items, setItems] = useState([]);
    const itemEvents=(event)=>{
        setInputList(event.target.value);
    }
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems, inputList];
        });
        setInputList("");
    }
    const removeItems=(id)=>{ 
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
        }
    
    return (<>
        <div className="main-div">
            <div className="center-div">
                <h1>TODO List</h1>
                <input type="text" placeholder="Add your Item" onChange={itemEvents}></input>
                <button onClick={listOfItems}><i class="fas fa-cart-plus"></i></button>
                <ul>
                    {
                        items.map((itemval, index)=>{
                            return (
                               <ToDoList
                               key={index}
                                id={index}
                               text={itemval}
                                   onSelect={removeItems}
                               /> 
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </>)
}

export default App;