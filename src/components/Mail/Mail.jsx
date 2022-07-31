import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../../icons";
import MailHeader from "./MailHeader";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
const Mail = () => {
  const { id } = useParams();
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const getMail = async () => {
      if (id) {
        const docRef = doc(db, "emails", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEmail(docSnap.data());
        } else {
          alert("No such document!");
        }
      }
    };
    getMail();
  }, [id]);

  return (
    <div className="w-full ">
      <MailHeader />
      <section className="my-3">
        <div className="flex items-center font-['Poppins']">
          <h3 className="text-xl capitalize">{email?.subject}</h3>
          <icon.IconButton>
            <icon.LabelImportantIcon className="text-yellow-500" />
          </icon.IconButton>
          <small className="bg-slate-200 p-1 rounded-md hover:bg-slate-400 cursor-pointer">
            Inbox-x
          </small>
        </div>
        <div className="flex gap-2 my-4">
          <icon.Avatar />
          <div className="w-full">
            <header className="flex items-center justify-between">
              <span>
                <h3 className="text-sm font-bold">{email?.sender}</h3>
                <p className="text-sm">to {email?.receipient}</p>
              </span>
              <span className="text-[#767676] flex items-center text-[15px]">
                <p> {new Date(email?.timestamp?.toDate()).toUTCString()}</p>
                <icon.IconButton>
                  <icon.StarIcon />
                </icon.IconButton>
                <icon.IconButton>
                  <icon.UndoIcon />
                </icon.IconButton>
                <icon.IconButton>
                  <icon.MoreVertIcon />
                </icon.IconButton>
              </span>
            </header>
            <p className="my-3 text-[15px] w-4/5 ">{email?.message}</p>
          </div>
        </div>
        <div className="flex gap-3 font-medium">
          <button className="px-3 py-1 rounded-md border text-[#767676] border-gray-400">
            <icon.ArrowBackIcon className="" /> Reply
          </button>
          <button className="border px-3 py-1 rounded-md text-[#767676] border-gray-500">
            <icon.ArrowRightAltIcon /> Forward
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mail;
