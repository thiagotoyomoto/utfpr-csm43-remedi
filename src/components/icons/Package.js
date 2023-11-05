import PackageIcon from '../../../assets/icons/package.svg';
import PackageFillIcon from '../../../assets/icons/package-fill.svg';

export default function Package({ size, width=size, height=width, fill=false, color='#000' }) {
    if (fill) return <PackageFillIcon width={width} height={height} fill={color} />
    return <PackageIcon width={width} height={height} fill={color} />
}
