import React, { useState } from "react";
import "./scanner.css";
import Scanner from "./Scanner";
import { Link } from "react-router-dom";
import { baseurl } from "../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import SubHead from "../components/Header/SubHead";
const Pdfscanner = () => {
  const userCookie = Cookies.get("user");
  const decodedToken = jwtDecode(userCookie);
  const user = userCookie ? decodedToken : null;
  const userId = user.userId == undefined ? user._id : user.userId;
  // let [userQuestion, setUserQuestion] = useState('');
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otherPdf, setOtherPdf] = useState("");
  let confirm;
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([]);
  const [check, setCheck] = useState("");
  console.log(check);
  // Function to handle user messages

  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setOtherPdf(file);
    setSelectedFile(file);
    setPdfUploaded(true);
    const formData = new FormData();
    formData.append("pdfDoc", file);
    formData.append("userQuestion", "need more info about this candidate");
    formData.append("userId", userId);
    formData.append("pdfUrl", "");
    setIsLoading(true);

    try {
      // Send the user's question to the API
      const response = await axios.post(
        `${baseurl}/api/pdf/getResult`,
        formData
      );
      confirm = response.data.chat_history;
      setCheck(confirm);
      // Create a new user message object
      const newUserMessage = {
        // message: userMessage,
        sender: "user",
        direction: "outgoing",
      };

      // Update chat messages state with the new user message
      const updatedChatMessages = [...chatMessages, newUserMessage];
      // Check if the answer is available
      if (confirm) {
        // For subsequent questions, add the answer to chat messages
        updatedChatMessages.push({
          message: confirm,
          sender: "backend",
        });
      }

      setChatMessages(updatedChatMessages);

      // Set the answer for the next user message

      // Clear the input field
      // setUserQuestion('');
    } catch (error) {
      console.log(error.message);
      const errorMessage = error.response
        ? error.response.data.error
        : "An unexpected error occurred";
      toast.error(errorMessage, {
        // Use errorMessage here
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleUserMessage = async (userMessage) => {
    const formData = new FormData();
    formData.append("pdfDoc", otherPdf);
    formData.append("userQuestion", userMessage);
    formData.append("userId", userId);
    formData.append("pdfUrl", "");
    setIsLoading(true);

    try {
      // Send the user's question to the API
      const response = await axios.post(
        `${baseurl}/api/pdf/getResult`,
        formData
      );
      confirm = response.data.chat_history;

      // Create a new user message object
      const newUserMessage = {
        message: userMessage,
        sender: "user",
        direction: "outgoing",
      };

      // Update chat messages state with the new user message
      const updatedChatMessages = [...chatMessages, newUserMessage];
      // Check if the answer is available
      if (confirm) {
        // For subsequent questions, add the answer to chat messages
        updatedChatMessages.push({
          message: confirm,
          sender: "backend",
        });
      }

      setChatMessages(updatedChatMessages);

      // Set the answer for the next user message

      // Clear the input field
      // setUserQuestion('');
    } catch (error) {
      console.log(error.message);
      const errorMessage = error.response
        ? error.response.data.error
        : "An unexpected error occurred";
      toast.error(errorMessage, {
        // Use errorMessage here
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <main>
        <SubHead />

        <div className="bg-[#f7f5ee] text-black px-4">
          <div className=" mx-auto py-16 max-w-7xl">
            <div className="flex flex-col text-center mb-6">
              <h1 className="text-5xl font-serif">Resume AI Scanner</h1>
              <p className="mt-2 text-gray-600">
                Get resume overview and questions to assess the candidates
              </p>
            </div>
            <div className="w-full flex justify-center">
              {" "}
              <div className="h-[350px] relative text-center w-75">
                <input
                  className="cursor-pointer hidden"
                  type="file"
                  id="input-file-upload"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <label
                  className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300 block  h-96"
                  htmlFor="input-file-upload"
                >
                  {selectedFile ? (
                    <div className="text-center">
                      <h2 className="text-lg font-semibold">
                        {selectedFile.name}
                      </h2>
                      <p className="text-sm">
                        {(selectedFile.size / 1024).toFixed(2)} KB
                      </p>
                      <embed
                        src={URL.createObjectURL(selectedFile)}
                        type="application/pdf"
                        width="700px"
                        height="630px"
                        className="pdf"
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer flex flex-col items-center space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                      <p className="pointer-events-none font-medium text-sm leading-6 pointer opacity-75">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  )}
                </label>
              </div>
              <div className="w-1/2 pl-2">
                {selectedFile && (
                  <MainContainer>
                    <ChatContainer>
                      <MessageList
                        typingIndicator={
                          isLoading ? (
                            <TypingIndicator content="Pdf is thinking" />
                          ) : null
                        }
                      >
                        {/* Map through chat messages and render each message */}
                        {chatMessages.map((message, i) => {
                          return (
                            <Message
                              key={i}
                              model={message}
                              style={
                                message.sender === "Pdf "
                                  ? { textAlign: "left" }
                                  : {}
                              }
                            />
                          );
                        })}
                      </MessageList>
                      <MessageInput
                        placeholder="Type Message here"
                        onSend={handleUserMessage}
                      />
                    </ChatContainer>
                  </MainContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pdfscanner;
