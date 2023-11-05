import ErrorIcon from '../../../assets/icons/error.svg';
import ErrorFillIcon from '../../../assets/icons/error-fill.svg'

export default function Error({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <ErrorFillIcon width={width} height={height} fill={color} />
    return <ErrorIcon width={width} height={height} fill={color} />
}
