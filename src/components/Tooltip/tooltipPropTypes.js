import PropTypes from 'prop-types';
import {windowDimensionsPropTypes} from '../withWindowDimensions';

const propTypes = {
    /** Enable support for the absolute positioned native(View|Text) children. It will only work for single native child  */
    absolute: PropTypes.bool,

    /** The text to display in the tooltip. */
    text: PropTypes.string,

    /** Styles to be assigned to the Tooltip wrapper views */
    containerStyles: PropTypes.arrayOf(PropTypes.object),

    /** Children to wrap with Tooltip. */
    children: PropTypes.node.isRequired,

    /** Props inherited from withWindowDimensions */
    ...windowDimensionsPropTypes,

    /** Any additional amount to manually adjust the horizontal position of the tooltip.
    A positive value shifts the tooltip to the right, and a negative value shifts it to the left. */
    shiftHorizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

    /** Any additional amount to manually adjust the vertical position of the tooltip.
    A positive value shifts the tooltip down, and a negative value shifts it up. */
    shiftVertical: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

    /** When true, each word of text will be placed in its own line */
    displayWordPerLine: PropTypes.bool,

    /** Maximun amount of words the tooltip should show */
    maximumWords: PropTypes.number,
};

const defaultProps = {
    absolute: false,
    shiftHorizontal: 0,
    shiftVertical: 0,
    containerStyles: [],
    text: '',
    maximumWords: 8,
    displayWordPerLine: false,
};

export {
    propTypes,
    defaultProps,
};
