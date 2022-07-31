import EmailRow from "./EmailRow";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import MailSections from "./MailSections";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/UserContext"


const ReceivedMails = () => {
  const [emails, receivedEmails] = useState([]);
  const {user} =UserAuth()

  useEffect(() => {
    const data = query(
      collection(db, "emails"),
      orderBy("timestamp", "desc"),
      where("receipient", "==", user?.email)
    );
    const unsubscribe = onSnapshot(data, (snapshot) => {
      receivedEmails(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    return () => unsubscribe();
  }, []);
 

  return (
    <div className="w-full ">
      <MailSections />
      <section className="overflow-y-auto w-full h-full">
        {emails?.map((email) => (
          <Link to={`${email.id}`} key={email.id}>
            <EmailRow key={email?.id} email={email} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ReceivedMails;
