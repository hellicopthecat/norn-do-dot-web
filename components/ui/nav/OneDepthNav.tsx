import {useState} from "react";
import CheckboxInput from "../inputs/CheckboxInput";
import Label from "../label/Label";

interface IOneDepthNavProps {
  routines: [];
}

interface IOneDepthStateTypes {
  all: boolean;
  normal: boolean;
  daily: boolean;
  workout: boolean;
  business: boolean;
  travel: boolean;
  food: boolean;
}

export default function OneDepthNav({routines}: IOneDepthNavProps) {
  const [
    {all, normal, daily, workout, business, travel, food},
    setOneDepthState,
  ] = useState<IOneDepthStateTypes>({
    all: false,
    normal: false,
    daily: false,
    workout: false,
    business: false,
    travel: false,
    food: false,
  });

  const onFilterClicked = (key: keyof IOneDepthStateTypes) => {
    setOneDepthState((prev) => {
      return {...prev, [key]: !prev[key]};
    });
  };

  return (
    <nav>
      <ul className="flex flex-col gap-2 *:flex *:items-center *:gap-4">
        <li>
          <Label idFor="ALL" value="ALL" />
          <CheckboxInput
            id="ALL"
            checked={all}
            setChange={() => onFilterClicked("all")}
          />
        </li>
        <li>
          <Label idFor="NORMAL" value="NORMAL" />
          <CheckboxInput
            id="NORMAL"
            checked={normal}
            setChange={() => onFilterClicked("normal")}
          />
        </li>
        <li>
          <Label idFor="DAILY" value="DAILY" />
          <CheckboxInput
            id="DAILY"
            checked={daily}
            setChange={() => onFilterClicked("daily")}
          />
        </li>
        <li>
          <Label idFor="WORKOUT" value="WORKOUT" />
          <CheckboxInput
            id="WORKOUT"
            checked={workout}
            setChange={() => onFilterClicked("workout")}
          />
        </li>

        <li>
          <Label idFor="BUSINESS" value="BUSINESS" />
          <CheckboxInput
            id="BUSINESS"
            checked={business}
            setChange={() => onFilterClicked("business")}
          />
        </li>
        <li>
          <Label idFor="TRAVEL" value="TRAVEL" />
          <CheckboxInput
            id="TRAVEL"
            checked={travel}
            setChange={() => onFilterClicked("travel")}
          />
        </li>
        <li>
          <Label idFor="FOOD" value="FOOD" />
          <CheckboxInput
            id="FOOD"
            checked={food}
            setChange={() => onFilterClicked("food")}
          />
        </li>
      </ul>
    </nav>
  );
}
