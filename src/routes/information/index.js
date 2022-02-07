import style from '../information/index.module.css';

function Information() {
  return <div className={style.text}>
    <div style={{
      width: 700
    }}>
      Привет! Сервис aftertime.me предоставляет возможность создания цифровой капсулы времени. Проект создан для практики и демонстрации навыков программирования с использованием таких технологий как: next.js, react, mobx
  </div>
  </div>;
}

export default Information;
