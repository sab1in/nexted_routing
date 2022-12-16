import "./App.css";
import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ borderRight: "2px solid gray", padding: "0 10px" }}>
          <ul>
            <li>
              <Link to={"/sent"}>sent</Link>
            </li>
            <li>
              <Link to={"/received"}>received</Link>
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/sent/*" element={<Sent />} />
            <Route path="/received/*" element={<Received />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const Sent = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ borderRight: "2px solid gray", padding: "0 10px" }}>
        <ul>
          <li>
            <Link to={"/sent/sent_mail_1"}>sent Mail 1</Link>
          </li>
          <li>
            <Link to={"/sent/sent_mail_2"}>sent Mail 2</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<div>sent mail</div>} />
          <Route path="/:slug" element={<SentMail />} />
        </Routes>
      </div>
    </div>
  );
};

const Received = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ borderRight: "2px solid gray", padding: "0 10px" }}>
        <ul>
          <li>
            <Link to={"/received/received_mail_1"}>Received Mail 1</Link>
          </li>
          <li>
            <Link to={"/received/received_mail_2"}>Received Mail 2</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<div>received mail</div>} />
          <Route path="/:slug" element={<ReceivedMail />} />
        </Routes>
      </div>
    </div>
  );
};

const SentMail = () => {
  const { slug } = useParams();
  return <div>mail detail {slug}</div>;
};

const ReceivedMail = () => {
  const { slug } = useParams();
  return <div>received mail detail {slug}</div>;
};

export default App;
