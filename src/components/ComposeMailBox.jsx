import { useSelector, useDispatch } from "react-redux";
import { closeSendMessage } from "../context/MailContext";
import icon from "../icons";
import Draggable from "react-draggable";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/UserContext"

const ComposeMailBox = () => {

  const [receipient,setReceipient] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")
  const {user} = UserAuth()

  const composeBoxIsOpen = useSelector((state) => state.mail.sendMessageIsOpen);
  const dispatch = useDispatch();

  const handleSubmit= async(e) =>{
    e.preventDefault()
    const docRef = collection(db, "emails");

    await addDoc(docRef, {
           
      subject:subject,
      message:message,
      receipient:receipient,
      timestamp: serverTimestamp(),
      sender:user?.email,
    });
     dispatch(closeSendMessage())

    
  }

  

  

  return (
    <>
     {composeBoxIsOpen && (

      <Draggable>
      <div className=" w-96 min-h-3/5 bg-white bottom-5 rounded-xl z-10 border  drop-shadow-xl absolute right-5">
        <header className="bg-slate-600 flex font-medium items-center justify-between p-3 rounded-t-md  text-white ">
          <h3>New Message</h3>
          <icon.CloseIcon onClick={() => dispatch(closeSendMessage())} className='cursor-pointer' />
        </header>
        <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col">
            <input type="text" name='receipients' value={receipient} onChange={(e)=>setReceipient(e.target.value)} required placeholder="Receipient" className="border-b p-2 outline-none" />
            
            <input type="text" name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} required placeholder="Subject" className="border-b p-2 outline-none"  />
          
            <textarea name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} required cols="30" rows="10" className=" p-2 outline-none mb-2" ></textarea>
          
            <button  className="bg-[#1A73E8] font-medium rounded-md text-white w-fit px-5 py-2 ml-4 mb-4" >Send</button>
        </form>
      </div>
    </Draggable>
     )}
    </>
  );
};

export default ComposeMailBox;
