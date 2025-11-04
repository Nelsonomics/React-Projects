const Color = ({ name, bGcolor }) => {
  return (
    <div
      className={`h-24 w-full rounded-xl m-4 flex items-center justify-center shadow-md ${bGcolor}`}
    >
      <p className="text-white font-bold text-lg tracking-wide drop-shadow-sm">
        {name}
      </p>
    </div>
  );
};

export default Color;
