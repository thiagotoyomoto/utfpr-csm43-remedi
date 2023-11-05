import MenuIcon from '../../../assets/icons/menu.svg';

export default function Prescription({ size, width=size, height=width, fill=false, color='#000' }) {
    return <MenuIcon width={width} height={height} fill={color} />
}
