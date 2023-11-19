import BadgeIcon from '@assets/icons/badge.svg';
import BadgeFillIcon from '@assets/icons/badge-fill.svg';

import { IconProps } from './props';

export default function Badge({ size, fill=false, color='black' } : IconProps) {
    if (fill) return <BadgeFillIcon width={size} height={size} fill={color} />
    return <BadgeIcon width={size} height={size} fill={color} />
}
