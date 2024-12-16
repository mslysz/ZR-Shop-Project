import style from './FullWidthButton.module.css';
export function FullWidthButton({ children, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
