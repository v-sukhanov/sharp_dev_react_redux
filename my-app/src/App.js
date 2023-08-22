import logo from './logo.svg';
import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementByAmount} from "./store/configureStore";
const App = () => {
    // Вытаскиваем данные из хранилища. state – все состояние
    const count = useSelector((state) => state.counter.value);
    // Возвращает метод store.dispatch() текущего хранилища
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Прибавить
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Отнять
                </button>
                <br/>
                <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
            </div>
        </div>
    );
};

export default App;
