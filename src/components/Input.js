import classNames from 'classnames';

function Input(props) {

    const {
        type,
        value,
        ...rest
    } = props;


    const classes = classNames('border border-gray-300 bg-gray-100 p-2', rest.className);

    return <input {...rest} className={classes} value={value} type={type} />

}

export default Input;