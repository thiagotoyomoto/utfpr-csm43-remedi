import HomeIcon from '../../../assets/icons/home.svg';
import HomeFillIcon from '../../../assets/icons/home-fill.svg';

export default function Home({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <HomeFillIcon width={width} height={height} fill={color} />
    return <HomeIcon width={width} height={height} fill={color} />
}
