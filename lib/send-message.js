import { auth, db } from "../firebase/client-app";
import { setDoc, Timestamp, doc } from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import { storage } from "../firebase/client-app";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const send = async (payload) => {
  payload.closeUploadModal();
  const sender = auth.currentUser.uid;
  const conversationID = "community";

  let url = "";
  // IF SENDING IMAGE
  if (payload.imageFile) {
    const filePath = `${conversationID}/images/picture-${new Date().getTime()}`;
    const fileRef = ref(storage, filePath);

    const uploadTask = uploadBytesResumable(fileRef, payload.imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        payload.setProgress(progress);
      },
      (err) => {
        console.log(err.message);
        payload.setProgress(0);
      },
      async () => {
        url = await getDownloadURL(uploadTask.snapshot.ref);
        const messageID = uuid4();
        const messageDocPath = `chats/${conversationID}/messages/${messageID}`;

        const messageObject = {
          ID: messageID,
          Markup: payload.textMessage,
          From: auth.currentUser.displayName,
          CreatedAt: Timestamp.fromDate(new Date()),
          MediaURL: url,
          Type: "IMAGE",
          FilePath: filePath,
          DocPath: messageDocPath,
          SenderProfileImage: payload.senderProfileImage,
          SenderID: sender,
        };

        try {
          await setDoc(doc(db, messageDocPath), messageObject);
        } catch (err) {
          console.log(err.message);
          alert(err.message);
        }

        payload.setProgress(0);
        payload.cleanUp();

        console.log("MESSAGE SENT");
      }
    );
  }
  // IF SENDING AUDIO
  else if (payload.audioFile.blob) {
    const filePath = `${conversationID}/audio/voice-note-${new Date().getTime()}`;
    const fileRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(fileRef, payload.audioFile.blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        payload.setProgress(progress);
      },
      (err) => {
        console.log(err.message);
        payload.setProgress(0);
      },
      async () => {
        url = await getDownloadURL(uploadTask.snapshot.ref);
        const messageID = uuid4();
        const messageDocPath = `chats/${conversationID}/messages/${messageID}`;

        const messageObject = {
          ID: messageID,
          Markup: payload.textMessage,
          From: auth.currentUser.displayName,
          CreatedAt: Timestamp.fromDate(new Date()),
          MediaURL: url,
          Type: "AUDIO",
          FilePath: filePath,
          DocPath: messageDocPath,
          SenderProfileImage: payload.senderProfileImage,
          SenderID: sender,
        };

        try {
          await setDoc(doc(db, messageDocPath), messageObject);
        } catch (err) {
          console.log(err.message);
          alert(err.message);
        }

        payload.setProgress(0);
        payload.cleanUp();

        console.log("MESSAGE SENT");
      }
    );
  }
  // IF SENDING TEXT
  else {
    const messageID = uuid4();
    const messageDocPath = `chats/${conversationID}/messages/${messageID}`;

    const messageObject = {
      ID: messageID,
      Markup: payload.textMessage,
      From: auth.currentUser.displayName,
      To: "community",
      SenderID: sender,
      CreatedAt: Timestamp.fromDate(new Date()),
      MediaURL: "",
      Type: "TEXT",
      FilePath: "",
      DocPath: messageDocPath,
      SenderProfileImage: payload.senderProfileImage,
    };

    payload.clearTextInput("");

    try {
      await setDoc(doc(db, messageDocPath), messageObject);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }

    payload.cleanUp();
  }
};
