// src/components/GetInvolvedButton.jsx

export default function GetInvolvedButton({ onClick }) {
  return (
    <button
      className=" hover:text-blue font-lato  bg-secondary_blue w-[180px] h-[60px] px-2   font-bold text-lg  text-[#000]"
      onClick={onClick}
    >
      Explore the Chart
    </button>
  );
}
