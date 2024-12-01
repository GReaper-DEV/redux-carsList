import {useDispatch, useSelector} from 'react-redux';
import {changeName, changeCost, addCar} from '../store';
import Input from './Input';
import Button from './Button';

function CarForm() {

    const dispatch = useDispatch();

    const name= useSelector((state) => state.form.name)
    const cost= useSelector((state) => state.form.cost)


    const handleNameChange = (event) => {
        const text = event.target.value;
        dispatch(changeName(text));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const car = {
            name,
            cost
        };
        dispatch(addCar(car));


    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <Input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <Input
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="field">
                    <Button className="button is-link">Submit</Button>
                </div>
            </form>
        </div>
    );
}


export default CarForm;