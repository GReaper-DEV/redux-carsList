import Input from './Input';
import { useDispatch , useSelector} from 'react-redux';
import {changeSearchTerm} from '../store';

function CarSearch() {

    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => state.cars.searchTerm);

    const handleChange = (event) => {
        const text = event.target.value;
        dispatch(changeSearchTerm(text));
    }

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <Input type="text" value={searchTerm} onChange={handleChange}/>
            </div>
        </div>
)
}


export default CarSearch;