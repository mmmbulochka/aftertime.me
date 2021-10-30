import style from '../container/index.module.css';

function Container(props) {
  return (
    <div className={style.container}>
      <div className={style.container_content}>Message is: {props.message}</div>
    </div>
  );
}

export default Container;
