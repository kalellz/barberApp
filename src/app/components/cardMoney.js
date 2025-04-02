export default function CardMoney(props) {
  return (
    <div className="bg-[#202020] rounded-lg p-4 text-center">
      <h1 className="text-xs">{props.text}</h1>
      <h2 className="font-bold text-green-500 text-center">{props.value}</h2>
    </div>
  );
}