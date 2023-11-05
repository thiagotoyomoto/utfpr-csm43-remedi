import NotificationsOffIcon from '../../../assets/icons/notifications-off.svg';
import NotificationsOffFillIcon from '../../../assets/icons/notifications-off-fill.svg'

export default function NotificationsOff({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <NotificationsOffFillIcon width={width} height={height} fill={color} />
    return <NotificationsOffIcon width={width} height={height} fill={color} />
}
