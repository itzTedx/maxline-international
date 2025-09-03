"use client";

import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const scriptId = "tcx-callus-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
      script.id = scriptId;
      script.defer = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }

    const chatContainerId = "live-chat-container";
    if (!document.getElementById(chatContainerId)) {
      const chatContainer = document.createElement("div");
      chatContainer.id = chatContainerId;
      document.body.appendChild(chatContainer);

      const callUsSelector = document.createElement("call-us-selector");
      callUsSelector.setAttribute("phonesystem-url", "https://maxline.3cx.ae:5001");
      callUsSelector.setAttribute("party", "LiveChat166556");
      chatContainer.appendChild(callUsSelector);
    }
  }, []);

  return null;
};

export default LiveChat;
