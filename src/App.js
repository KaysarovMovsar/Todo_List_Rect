import './index.css';
import { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { Todos } from "./Todos";


function App() {

    const [todos, setTodos] = useState([
        {favorite: false, text: 'Купиты продукты'},
        {favorite: true, text: 'Купиты бананы'},
        {favorite: false, text: 'Купиты машину'},
        {favorite: true, text: 'Купиты дом'},
        {favorite: false, text: 'Купиты участок'}
    ])

    const [text, setText] = useState('')

    const deleteTodo = (indexOfDelete) => {
        const filterTodo = todos.filter((todo, index) => {
            if (index === indexOfDelete) {
                return false
            }
            return true
        })
        setTodos(filterTodo)
    }

    const makeFavorite = (indexOfFavotite) => {
        const newTodos = todos.map((item, index) => {
            if (index === indexOfFavotite) {
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }
            return item;
        })
        setTodos(newTodos);
    }
    const addTodo = (e) => {
        e.preventDefault();
        const noCopy = todos.find(todo => todo.text === text);
        if (!noCopy) {
            setTodos([{ text: text, favorite: false }, ...todos]);
        }
        setText('');
    }
    return (
        <div className="App">
            <Header />
            <Forms
                text={text}
                setText={setText}
                addTodo={addTodo}
            />
            <Todos
                todos={todos}
                makeFavorite={makeFavorite}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}



export default App;
