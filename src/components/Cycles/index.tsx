import sytles from './styles.module.css';

export function Cycles() {
  return (
    <div className={sytles.cycles}>
      <span>Ciclos:</span>

      <div className={sytles.cycleDots}>
        <span className={`${sytles.cycleDot} ${sytles.workTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.shortBreakTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.workTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.shortBreakTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.workTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.shortBreakTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.workTime}`}></span>
        <span className={`${sytles.cycleDot} ${sytles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
