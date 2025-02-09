import { ProgressBarProps } from '../type'

export const ProgressBar = ({ className, value, onAnimationEnd, paused }: ProgressBarProps) => {
  return (
    <div className="progress_bar_container" role="progressbar">
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
