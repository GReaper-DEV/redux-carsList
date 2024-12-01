import {removeCar} from '../store';
import { createSelector } from '@reduxjs/toolkit';
import Button from "./Button";
import {useSelector, useDispatch} from 'react-redux';

const memoizedCars = createSelector([(state) => state.cars.data, (state) => state.cars.searchTerm], (data, searchTerm) => {
    return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
});

function CarList() {

    const dispatch = useDispatch();

    const cars = useSelector(memoizedCars);
    const name = useSelector((state) => state.form.name)


    const handleClick = (id) => {
        dispatch(removeCar(id));

    }

    const renderedCars = [...cars].sort((a,b)=> {
        const isBoldA = name && a.name.toLowerCase().includes(name.toLowerCase());
        const isBoldB = name && b.name.toLowerCase().includes(name.toLowerCase());
        return isBoldB - isBoldA;
    })
        .map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return <div className={`panel ${bold && 'bold'}`} key={car.id}>
            <p>{car.name} - ${car.cost}</p>
            <Button danger rounded className="button is-link" onClick={() => handleClick(car.id)}>Delete</Button>
        </div>
    });

    return (<div className="car-list">
        <h4 className="subtitle is-3">Cars List</h4>
        {renderedCars}
        <hr/>
    </div>);
}

export default CarList;