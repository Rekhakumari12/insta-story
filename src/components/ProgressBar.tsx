import { ProgressBarProps } from '../type'

export const ProgressBar = ({ className, value, onAnimationEnd, paused }: ProgressBarProps) => {
  return (
    <div className="progress_bar_container">
      <div
        style={{
          animationDuration: `${value}s`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
        className={className}
        onAnimationEnd={onAnimationEnd}
      ></div>
    </div>
  )
}
