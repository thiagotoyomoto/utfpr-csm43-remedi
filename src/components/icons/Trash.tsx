import TrashIcon from '@assets/icons/trash.svg';
import TrashFillIcon from '@assets/icons/trash-fill.svg';

import { IconProps } from './props';

export default function Trash({ size, fill=false, color='black' } : IconProps) {
    if (fill) return <TrashFillIcon width={size} height={size} fill={color} />
    return <TrashIcon width={size} height={size} fill={color} />
}
