import NotificationsIcon from '../../../assets/icons/notifications.svg';
import NotificationsFillIcon from '../../../assets/icons/notifications-fill.svg'

export default function Notifications({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <NotificationsFillIcon width={width} height={height} fill={color} />
    return <NotificationsIcon width={width} height={height} fill={color} />
}
