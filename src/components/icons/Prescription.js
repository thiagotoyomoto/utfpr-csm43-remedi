import PrescriptionsIcon from '../../../assets/icons/prescriptions.svg';
import PrescriptionsFillIcon from '../../../assets/icons/prescriptions-fill.svg';

export default function Prescription({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <PrescriptionsFillIcon width={width} height={height} fill={color} />
    return <PrescriptionsIcon width={width} height={height} fill={color} />
}
