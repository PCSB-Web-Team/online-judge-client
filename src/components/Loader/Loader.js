import "./Loader.css";

export default function Loader() {
  return (
    <div className="absolute loader_container top-50 p-3 text-center left-50 border-gray-400">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
