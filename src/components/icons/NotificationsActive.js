import NotificationsActiveIcon from '../../../assets/icons/notifications-active.svg';
import NotificationsActiveFillIcon from '../../../assets/icons/notifications-active-fill.svg'

export default function NotificationsActive({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <NotificationsActiveFillIcon width={width} height={height} fill={color} />
    return <NotificationsActiveIcon width={width} height={height} fill={color} />
}
