import { useEffect, useState } from "react"

const CountClick = ({vote_count,dislike_count}) => {
   const [likeCount, setLikeCount] = useState(vote_count);
   const [disLikeCount, setDisLikeCount] = useState(dislike_count);
   const [likeCountChange, setLikeCountChange] = useState(true);
   const [disLikeCountChange, setDisLikeCountChange] = useState(true);
   let colorLike = likeCountChange ? 'falseLike' : 'trueLike';
   let colorDisLike = disLikeCountChange ? 'falseDisLike' : 'trueDisLike';
   let bgLike =  likeCountChange ? 'bgfalseLike' : 'bgtrueLike';
   let bgDisLike =  disLikeCountChange ? 'bgfalseDisLike' : 'bgtrueDisLike';


   const changeCount = (x) => {
      if (x) {
         if (likeCountChange) {
            if(!disLikeCountChange){
               setDisLikeCount((current) => current - 1)
               setDisLikeCountChange((prev) => !prev);
              };
            // aumenta il numero al primo click 
            setLikeCount((current) => current + 1)
         //   colorLike='colorLike'
         } else {
            // diminuisce al secondo click 
            setLikeCount((current) => current - 1)
         }
         // cambia il valore boolean 
         setLikeCountChange((prev) => !prev);
      } else {
         if (disLikeCountChange) {
            if(!likeCountChange){
               setLikeCount((current) => current - 1)
               setLikeCountChange((prev) => !prev);
              };
            setDisLikeCount((current) => current + 1)
         } else {
            setDisLikeCount((current) => current - 1)
         }
         setDisLikeCountChange((prev) => !prev);
      }
   };
   return (
      <>
         <div className="d-flex gap-3">
            <div className={`d-flex align-items-center justify-content-center gap-2 ${bgLike}`}>
               <button className="p-0 btn border-0"
                  onClick={() => { changeCount(true) }}
               >
                  <i className={`fa-regular fa-thumbs-up fs-3 ${colorLike}`} ></i>
               </button>
               <span className={`fs-2 ${colorLike}`}>{likeCount ? likeCount : ''}</span>
               {/* <span className="fs-2">{count ? count : ''}</span> */}
            </div>
            <div className={`d-flex align-items-center justify-content-center gap-2 ${bgDisLike}`}>
               <button className="p-0 border-0 btn h-100"
                  onClick={() => { changeCount(false) }}
               >
                  <i className={`fa-regular fa-thumbs-down fs-3 ${colorDisLike}`}></i>
               </button>
               <span className={`fs-2 ${colorDisLike}`}>{disLikeCount ? disLikeCount : ''}</span>
            </div>
         </div>
      </>
   );
}

export { CountClick }