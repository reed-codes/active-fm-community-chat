import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import AudioRecorder from "./AudioRecorder";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RecordPanel from "./RecordPanel";
import MediaUploader from "./MediaUploader";
import { useDropzone } from "react-dropzone";
import { send } from "../lib/send-message";
import SendingInProgressPanel from "./SendingInProgressPanel";
import { useUser } from "../state/context/userContext";
import { useRouter } from "next/router";

const ChatControls = (props) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [record, setRecord] = useState({
    blobUrl: "",
    blob: null,
  });
  const [SENDING, setSendingInProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const messageType =
    (record.blob && "AUDIO") || (files[0] && "IMAGE") || "TEXT";
  const router = useRouter();
  const userData = useUser();

  useEffect(() => {
    if (!userData.user) {
      router.push("/");
    }
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 100,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(record.blobUrl);
    },
    [record]
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleMessageChange = (payload) => {
    if (payload.target) setMessage(payload.target.value);
    else {
      setMessage(payload);
    }
  };
  const handleRecordUpdate = (url, blob) =>
    setRecord({ blobUrl: url, blob: blob });

  const handleDiscardRecording = () => {
    URL.revokeObjectURL(record.blobUrl);

    setRecord({
      blobUrl: "",
      blob: null,
    });
  };

  const closeMediaUploader = () => {
    if (files[0]) {
      if (window.confirm("Discard current changes")) {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
        setFiles([]);
        props.handleMediaUploaderClose();
      }
    } else props.handleMediaUploaderClose();
  };

  const cleanUpMessage = () => {
    if (message) setMessage("");
    if (files[0]) {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      setFiles([]);
    }
    if (record.blob) handleDiscardRecording();

    setSendingInProgress(false);
  };

  const handleSendRequest = () => {
    setSendingInProgress(true);

    const UPLOAD_TASK_DEPENDECIES = {
      closeUploadModal: props.handleMediaUploaderClose,
      imageFile: files[0],
      audioFile: record,
      textMessage: message,
      clearTextInput: setMessage,
      setProgress: setUploadProgress,
      cleanUp: cleanUpMessage,
      senderProfileImage: userData.user.GooglePhotoURL,
    };
    send(UPLOAD_TASK_DEPENDECIES);
  };

  return (
    <>
      <Box
        className="w-full fixed bottom-0 left-0 flex items-center gap-1 px-4 py-2 bg-[#00312d] border-l border-t border-solid border-gray-900"
        sx={{ transform: "translate(0,0)", minHeight: 60, overflow: "hidden" }}
      >
        {SENDING && messageType !== "TEXT" && (
          <SendingInProgressPanel
            preview={files[0]?.preview}
            fileType={messageType}
            progress={uploadProgress}
          />
        )}

        {userData.user?.Email === "activefm@activemi.co.za" && (
          <IconButton
            className="min-w-[35px] min-h-[35px] opacity-50 hover:opacity-100"
            onClick={props.handleMediaUploaderOpen}
          >
            <AddPhotoAlternateIcon className="text-[20px]" />
          </IconButton>
        )}

        <Box className="flex-1">
          <TextField
            variant="standard"
            // borderColor="transparent"
            placeholder="Write a message ..."
            value={message}
            onChange={handleMessageChange}
            fullWidth
            multiline
            maxRows={4}
          />
        </Box>

        {message ? (
          <IconButton
            className="min-w-[35px] min-h-[35px] opacity-50 hover:opacity-100"
            onClick={handleSendRequest}
          >
            <SendIcon className="text-[20px]" />
          </IconButton>
        ) : (
          <AudioRecorder handleRecordUpdate={handleRecordUpdate} />
        )}

        {record.blobUrl && (
          <RecordPanel
            handleDiscardRecording={handleDiscardRecording}
            record={record}
            send={handleSendRequest}
          />
        )}
      </Box>

      <MediaUploader
        closeFunc={closeMediaUploader}
        handleMessageChange={handleMessageChange}
        files={files}
        message={message}
        open={props.openMediaUploader}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        send={handleSendRequest}
      />
    </>
  );
};

export default ChatControls;
