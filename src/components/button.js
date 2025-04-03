export default function Button({ text, image: Icon, onClick }) {
  return (
    <button className="bg-[#202020] p-2 px-4 rounded-md flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
}
