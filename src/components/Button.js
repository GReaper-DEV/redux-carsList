import classNames from 'classnames';
import {twMerge} from 'tailwind-merge';
import PropTypes from 'prop-types';

function Button(props){

    const {
        children,
        primary,
        danger,
        rounded,
        outline,
        ...rest
    } = props;

    const classes = twMerge(
        classNames(rest.className,'px-3 py-1.5 border flex items-center gap-2', {
            'border-blue-500 bg-blue-500 text-white hover:border-blue-500 hover:bg-white hover:text-blue-500 transition': primary,
            'border-red-500 bg-red-500 text-white hover:border-red-500 hover:bg-white hover:text-red-500 transition': danger,
            'rounded-lg': rounded,
            'bg-white': outline,
            'text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition': outline && primary,
            'text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white transition': outline && danger
        })
    );

    Button.propTypes = {
        checkVariationValue: ({primany,  danger}) => {
            const count =
                Number(!!primany) +
                Number(!!danger);
            if (count > 1) {
                throw Error('Button Component -> Please choose only one value between primany, danger.')
            }
        },
        outline: PropTypes.bool,
        rounded: PropTypes.bool,
    }

    return <button {...rest} className={classes}>{children}</button>
}

export default Button;