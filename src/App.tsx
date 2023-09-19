import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { TShirt } from "./components/TShirt";
import { Item, allArts } from "./utils/allArts";
import { allColors } from "./utils/allColors";

function App() {
  const [arts, setArts] = useState<Item[] | undefined>(undefined);
  const [color, setColor] = useState("black");

  useEffect(() => {
    allArts().then((arts) => setArts(arts));
  }, []);

  function handleSelected(val: SingleValue<Item>) {
    if (val) {
      const artsTemp = [...arts!];
      artsTemp.forEach((art) => (art.selected = false));
      artsTemp[artsTemp.indexOf(val)].selected = true;
      console.log(artsTemp);
      setArts(artsTemp);
    }
  }

  function getUrl() {
    const selected = arts?.find((art) => art.selected);
    return selected?.url;
  }

  function handleColorChange(color: string) {
    setColor(JSON.parse(color).color);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl p-12 flex items-center justify-center">
        <div className="bg-slate-900/50 w-full flex flex-col gap-4 items-center justify-center rounded-md p-12">
          <Select onChange={handleSelected} options={arts} className="w-full" />
          <TShirt color={color} artUrl={getUrl() || ""} />
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
