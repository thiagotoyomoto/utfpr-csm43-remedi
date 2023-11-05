import PersonIcon from '../../../assets/icons/person.svg';
import PersonFillIcon from '../../../assets/icons/person-fill.svg';

export default function Person({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <PersonFillIcon width={width} height={height} fill={color} />
    return <PersonIcon width={width} height={height} fill={color} />
}
