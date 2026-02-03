function Banner({ image, position = "center", children }) {
  let justify;

  if (position === "left") {
    justify = "justify-start text-left";
  } else if (position === "right") {
    justify = "justify-end text-right";
  } else {
    justify = "justify-center";
  }

  return (
    <>
      <div
        className={`relative min-h-60 lg:min-h-[400px] flex items-center text-center text-white bg-cover bg-fixed bg-no-repeat ${justify}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        {children}
      </div>
    </>
  );
}

export default Banner;
