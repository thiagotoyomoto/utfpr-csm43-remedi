import EditIcon from '@assets/icons/edit.svg';
import EditFillIcon from '@assets/icons/edit-fill.svg';

import { IconProps } from './props';

export default function Edit({ size, fill=false, color='black' } : IconProps) {
    if (fill) return <EditFillIcon width={size} height={size} fill={color} />
    return <EditIcon width={size} height={size} fill={color} />
}
