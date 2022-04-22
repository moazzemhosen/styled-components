// import './button.css'
import styled from 'styled-components'

// export const Button=({children,onClick})=>{
//     return(
//         <button onClick={onClick} className="btn">
//             {children}
//             </button>
//     ) 
// }
const Button=styled.button`
background-color: transparent;
border: none;


border-radius: 4px;
padding: 5px;
padding-top: 8px;
text-align: center;
color: black;
background:#008ab8;
cursor: pointer;
margin: 5px;

&:hover{
    box-shadow: rgb(8, 232, 23) 0px 5px 15px;
}
`
export {Button}




