// import React from 'react'

// export const Paginate = () => {
//   return (
//     <div className='container mx-auto d-flex justify-content-center p-static'>
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         <li className="page-item">
//           <a className="page-link" href="#" aria-label="Previous">
//             <span aria-hidden="true">&laquo;</span>
//           </a>
//         </li>
//         <li className="page-item"><a className="page-link" href="#">1</a></li>
//         <li className="page-item"><a className="page-link" href="#">2</a></li>
//         <li className="page-item"><a className="page-link" href="#">3</a></li>
//         <li className="page-item">
//           <a className="page-link" href="#" aria-label="Next">
//             <span aria-hidden="true">&raquo;</span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//         </div>
//   )
// }

import React from "react";

export default function Paginate({elementPerPage, allElements, paginate}){
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(allElements/elementPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number=>(
                     <li>
                    <a onClick={()=> paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


 