interface props {
  position: string;
}

const DashedLine: React.FC<props> = ({ position }) => {
  return (
    <div className={`absolute w-full h-[1px]  ${position}`}>
      <div
        className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        style={{
          maskImage: "linear-gradient(to right, black 5px, transparent 5px)",
          WebkitMaskImage:
            "linear-gradient(to right, black 5px, transparent 5px)",
          maskSize: "15px 1px",
          WebkitMaskSize: "15px 1px",
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
        }}
      ></div>
    </div>
  );
};

export default DashedLine;
