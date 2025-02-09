import { ProgressBarProps } from '../type'

export const ProgressBar = ({ className, value }: ProgressBarProps) => {
  return (
    <div className="progress_bar_container">
      <div style={{ animationDuration: `${value}s` }} className={className}></div>
    </div>
  )
}
