import ReactMarkdown from "react-markdown";

const Md = () => {
    const markdown = ' # header ';
    <div className="main">
        <ReactMarkdown source={markdown} />
    </div>
}
export default Md;