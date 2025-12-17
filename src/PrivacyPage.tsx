import ReactMarkdown from "react-markdown";
import privacyMd from "./privacy.md?raw";

export default function PrivacyPage() {
  console.log("even loading?????");
  return (
    <div style={{ color: "#FAFAFA", fontSize: "1.5rem", maxWidth: "900px" }}>
      <ReactMarkdown>{privacyMd}</ReactMarkdown>
    </div>
  );
}
