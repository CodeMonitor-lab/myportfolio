import React,{useState,useEffect} from "react";

const TypingWord = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "NITESH KUMAR RAM";


  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <h1
      className="text-5xl md:text-7xl font-bold text-cyan-400 
    drop-shadow-[0_0_25px_#00ffff] mb-4"
    >
      {typedText}
      <span className="animate-pulse ml-1">|</span>
    </h1>
  );
};

export default TypingWord;
