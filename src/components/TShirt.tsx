import { VariantProps, tv } from "tailwind-variants";
import mockup from "../assets/mockup-tshirt.png";
import { HTMLAttributes } from "react";

const tshirt = tv({
  base: "cursor-pointer w-96 relative flex items-center justify-center rounded-md overflow-hidden hover:scale-150 hover:translate-y-10 transition-transform",
});

type TShirtProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof tshirt> & {
  artUrl: string;
  color: string;
};

export function TShirt({ artUrl, color, className }: TShirtProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={tshirt({ className })}
    >
      <img src={artUrl} className="absolute w-1/2 -translate-y-[30%]" draggable={false} />
      <img src={mockup} className="w-full" draggable={false} />
    </div>
  );
}
