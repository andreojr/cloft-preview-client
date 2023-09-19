import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { TShirt } from "./components/TShirt";
import { Item, allArts } from "./utils/allArts";
import { allColors } from "./utils/allColors";
import clsx from "clsx";

function App() {
  const [art, setArt] = useState<string | undefined>(undefined);
  const [color, setColor] = useState(undefined);

  function handleSelected(val: SingleValue<Item>) {
    if (val) setArt(val.url);
  }

  function handleColorChange(color: string) {
    if (color)
      setColor(JSON.parse(color).color);
  }

  return (
    <div className="bg-slate-950 h-screen flex items-center justify-center">
      <div className="max-w-3xl p-12 flex items-center justify-center">
        <div className="bg-slate-900/50 w-full flex flex-col gap-4 items-center justify-center rounded-md p-12">
          
          <div className={clsx("bg-slate-900 w-full text-slate-400 rounded-md overflow-hidden", {
            "h-96 flex items-center justify-center text-center": !art || !color,
          })}>
            {art && color ? <TShirt color={color} artUrl={art} /> : <p>Selecione para <br /> pré-visualização...</p>}
          </div>
          <Select onChange={handleSelected} options={allArts} className="w-full" />
          <ToggleGroup.Root type="single" className="grid grid-flow-row grid-cols-2 gap-3 w-full" onValueChange={handleColorChange}>
            {allColors.map((color) => (
              <ToggleGroup.Item value={JSON.stringify(color)} key={color.value} className="data-[state=on]:bg-rose-600 w-full flex items-center gap-4 bg-slate-900 rounded-md p-2">
                <div
                  className="w-8 h-8 rounded-full bg-white border"
                  style={{ backgroundColor: color.color }}
                />
                <p className="text-white">{color.label}</p>
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
        </div>
      </div>
    </div>
  );
}

export default App;
