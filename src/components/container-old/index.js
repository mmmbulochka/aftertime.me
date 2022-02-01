// import style from '../container/index.module.css';
// import dayjs from 'dayjs';
// import {useState} from 'react';
//
// function Container(props) {
//   const [open, setOpen] = useState(false);
//   const createDate = props.memory.created * 1000;
//   const openDate = props.memory.date * 1000;
//   return (
//     <div
//       className={style.container}
//       onClick={() => {
//         if (Date.now() >= openDate) {
//           setOpen(!open);
//         }
//       }}
//     >
//       <div className={style.container_content}>
//         <div>{props.memory.message}</div>
//         <div>
//           {dayjs(createDate).format('DD/MM/YYYY')} to{' '}
//           {dayjs(openDate).format('DD/MM/YYYY')}
//         </div>
//       </div>
//       {open && (
//         <div>
//           {props.memory.files.map((fileURL) => (
//             <img key={fileURL} src={fileURL} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default Container;
