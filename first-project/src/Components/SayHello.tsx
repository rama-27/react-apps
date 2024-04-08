interface Props{
    msg:string 
    clgName:string
}
function SayHello({msg,clgName}:Props){ 
   return <h1>{msg}  {clgName}</h1>
}
export default SayHello;