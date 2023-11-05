import WarningIcon from '../../../assets/icons/warning.svg';
import WarningFillIcon from '../../../assets/icons/warning-fill.svg'

export default function Warning({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <WarningFillIcon width={width} height={height} fill={color} />
    return <WarningIcon width={width} height={height} fill={color} />
}
