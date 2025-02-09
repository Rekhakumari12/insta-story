import LeftArrow from '../assets/icons/left-arrow.svg'
import RightArrow from '../assets/icons/right-arrow.svg'

const iconMap = {
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof iconMap
}

export const Icon: React.FC<IconProps> = ({ iconName, width, height, fill, ...props }) => {
  const SvgIcon = iconMap[iconName]
  console.log(SvgIcon)
  return <SvgIcon width={width} height={height} fill={fill} {...props} />
}
