export default function HexagonFrame() {
  return (
    <div className="relative flex-col justify-center p-[7px] items-center aspect-[750/750] w-[min(638px,100%)]">
      <svg viewBox="0 0 442 490" className="h-full w-full transition-[transform,filter] duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_14px_#8ace00] motion-reduce:hover:scale-100">
        <defs>
          <clipPath id="hex-clip">
            <polygon points="221,20 422,124 422,366 221,470 20,366 20,124" />
          </clipPath>
        </defs>

        <image
          href="/pic.jpg"
          width="442"
          height="490"
          clipPath="url(#hex-clip)"
        />

        <polygon
          points="221,20 422,124 422,366 221,470 20,366 20,124"
          fill="none"
          stroke="#8ace00"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}
