import QRCodeLink from "qrcode";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 660,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <QRCode value={link} />

      <input
        className="input"
        value={link}
        onChange={(e) => handleQrcode(e)}
        placeholder="Digite seu link..."
      />

      <a href={qrcodeLink} download={`qrcode.png`}>
        Baixar QRCode
      </a>
    </div>
  );
}

export default App;
