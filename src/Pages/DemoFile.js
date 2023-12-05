import { useState, useEffect } from "react";
import "../App.css";
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
import { useMediaQuery } from "react-responsive";
import { baseurl } from "../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DemoFile({ pdfDoc, userId }) {
  // let [userQuestion, setUserQuestion] = useState('');
  const pdfUrl = localStorage.getItem("pdfUrl");
  const [showOptions, setShowOptions] = useState(true); // State to control the visibility of options

  const [isLocateSectionSelected, setIsLocateSectionSelected] = useState(false);
  const [isLanguageSelected, setLanguageSelected] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState("Type Message here");
  const handleOptionClick = async (option) => {
    // Translate a paragraph
    if (option === "Locate a specific section") {
      setIsLocateSectionSelected(true);
      setInputPlaceholder("Enter desired section you want to search"); // Set the state to true when this option is selected
    } else if (option === "Translate a paragraph") {
      setInputPlaceholder("Enter desired Translate language");
      setLanguageSelected(true);
    } else {
      await handleUserMessage(option); // For other options, proceed as before
      setShowOptions(false);
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  let confirm;
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([]);

  // Function to handle user messages
  const handleUserMessage = async (userMessage) => {
    const formData = new FormData();
    formData.append("pdfDoc", pdfDoc);
    formData.append("userQuestion", userMessage);
    formData.append("userId", userId);
    formData.append("pdfUrl", pdfUrl);
    if (isLocateSectionSelected) {
      userMessage = "Locate a specific section: " + userMessage;
      setIsLocateSectionSelected(false); // Reset the state
      setInputPlaceholder("Type Message here");
    }
    if (isLanguageSelected) {
      userMessage = "Translate a paragraph: " + userMessage;
      setLanguageSelected(false); // Reset the state
      setInputPlaceholder("Type Message here");
    }
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
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <>
           <Desktop>
        <div
          style={{
            position: "relative",
            height: "90vh",
            width: "700px",
            margin: "auto",
          }}
        >

          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  isLoading ? <TypingIndicator content="Pdf is thinking" /> : null
                }
              >
                {chatMessages.map((message, i) => (
                  <Message
                    key={i}
                    model={message}
                    style={message.sender === "Pdf " ? { textAlign: "left" } : {}}
                  />
                ))}

                {showOptions && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      margin: "auto",
                      borderColor: "rgba(0,0,0,.1)",
                    }}
                  >
                    {/* Option buttons with specific content */}
                    <div style={{ display: "flex" }}>
                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          // margin: "10px",
                          width: "-webkit-fill-available",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleOptionClick("Find a summary of the document")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Find Summary</div>
                          <div className=" opacity-50">
                            Get a quick summary of the PDF content
                          </div>
                        </div>
                      </button>

                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          cursor: "pointer",
                       width: "-webkit-fill-available",
                        }}
                        onClick={() =>
                          handleOptionClick("Locate a specific section")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Locate Section</div>
                          <div className=" opacity-50">
                            Find a specific section or chapter
                          </div>
                        </div>
                      </button>
                    </div>

                    <div style={{ display: "flex" }}>
                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          cursor: "pointer",
                       width: "-webkit-fill-available",
                          
                          margin: "10px",
                        }}
                        onClick={() => handleOptionClick("Translate a paragraph")}
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">
                            Translate Paragraph
                          </div>
                          <div className=" opacity-50">
                            Get a translation of a selected paragraph
                          </div>
                        </div>
                      </button>

                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          margin: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleOptionClick("Extract data or figures")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Extract Data</div>
                          <div className=" opacity-50">
                            Pull out specific data or figures from the PDF
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </MessageList>

              <MessageInput
                placeholder={inputPlaceholder}
                onSend={handleUserMessage}
                className="change"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </Desktop>
      <Mobile>
        <div
          style={{
            position: "relative",
            height: "50vh",
            // width: "700px",
            margin: "auto",
          }}
        >

          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  isLoading ? <TypingIndicator content="Pdf is thinking" /> : null
                }
              >
                {chatMessages.map((message, i) => (
                  <Message
                    key={i}
                    model={message}
                    style={message.sender === "Pdf " ? { textAlign: "left" } : {}}
                  />
                ))}

                {showOptions && (
                  <div
                    style={{

                      margin: "auto",
                      borderColor: "rgba(0,0,0,.1)",
                    }}
                  >
                    {/* Option buttons with specific content */}
                    <div >
                      <button
                        className="mx-3 my-2"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          // margin: "10px",
                          width: "-webkit-fill-available",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleOptionClick("Find a summary of the document")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Find Summary</div>
                          <p className=" opacity-50 w-100">
                            Get a quick summary of the PDF content
                          </p>
                        </div>
                      </button>

                      <button
                        className="mx-3 my-2"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          cursor: "pointer",
                          width: "-webkit-fill-available",

                        }}
                        onClick={() =>
                          handleOptionClick("Locate a specific section")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Locate Section</div>
                          <p className=" opacity-50 w-100">
                            Find a specific section or chapter
                          </p>
                        </div>
                      </button>
                    </div>

                    <div >
                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          cursor: "pointer",
                          width: "-webkit-fill-available",
                          margin: "10px",
                        
                        }}
                        onClick={() => handleOptionClick("Translate a paragraph")}
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">
                            Translate Paragraph
                          </div>
                          <p className=" opacity-50 w-100">
                            Get a translation of a selected paragraph
                          </p>
                        </div>
                      </button>

                      <button
                        className="mx-3"
                        style={{
                          border: "2px solid #000",
                          borderRadius: "20px",
                          margin: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleOptionClick("Extract data or figures")
                        }
                      >
                        <div className="flex flex-col overflow-hidden">
                          <div className=" font-normal">Extract Data</div>
                          <p className=" opacity-50 w-100">
                            Pull out specific data or figures from the PDF
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </MessageList>

              <MessageInput
                placeholder={inputPlaceholder}
                onSend={handleUserMessage}
                className="change"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </Mobile>
    </>
  );
}

export default DemoFile;
