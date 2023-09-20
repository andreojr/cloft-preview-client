import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { TShirt } from "./components/TShirt";
import { Item, allArts } from "./utils/allArts";
import { allColors } from "./utils/allColors";

function App() {
  const [art, setArt] = useState<string | undefined>(undefined);
  const [color, setColor] = useState(undefined);

  function handleSelected(val: SingleValue<Item>) {
    if (val) setArt(val.url);
  }

  function handleColorChange(color: string) {
    if (color) setColor(JSON.parse(color).color);
  }

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl max-sm:w-full sm:p-12 flex items-center justify-center">
        <div className="bg-slate-900/50 w-full flex flex-col gap-4 items-center justify-center rounded-md p-12">
          <div
            className={clsx(
              "bg-slate-900 w-full text-slate-400 rounded-md overflow-hidden",
              {
                "h-96 flex items-center justify-center text-center":
                  !art || !color,
              }
            )}
          >
            {art && color ? (
              <TShirt color={color} artUrl={art} />
            ) : (
              <p className="px-6">Selecione para pré-visualização...</p>
            )}
          </div>
          <Select
            onChange={handleSelected}
            options={allArts}
            className="w-full"
          />
          <ToggleGroup.Root
            type="single"
            className="grid grid-flow-row grid-cols-2 gap-2 w-full rounded-md"
            onValueChange={handleColorChange}
          >
            {allColors.map((color) => (
              <ToggleGroup.Item
                value={JSON.stringify(color)}
                key={color.color}
                className="group h-12 data-[state=on]:bg-rose-600 w-full flex items-center justify-center text-white gap-2 bg-slate-900 rounded-md py-2 px-4 relative border"
                style={{ backgroundColor: color.color }}
              >
                <div className="absolute w-full h-full bg-black/50 rounded-md hidden group-data-[state=on]:flex items-center justify-center">
                  <p>{color.label}</p>
                </div>
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
        </div>
      </div>
    </div>
  );
}

export default App;
