export default function HexagonFrame() {
  return (
    <div className="relative flex-col justify-center p-[8px] items-center aspect-[442/490] w-[min(442px,100%)]">
      <svg viewBox="0 0 442 490" className="h-full w-full">
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
