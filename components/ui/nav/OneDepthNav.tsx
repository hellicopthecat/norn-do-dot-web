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

export default function OneDepthNav({}: IOneDepthNavProps) {
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

  const onFilterCliced = (key: keyof IOneDepthStateTypes) => {
    setOneDepthState((prev) => {
      return {...prev, [key]: !prev[key]};
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Label idFor="ALL" value="ALL" />
          <CheckboxInput
            id="ALL"
            checked={all}
            setChange={() => onFilterCliced("all")}
          />
        </li>
        <li>
          <Label idFor="NORMAL" value="NORMAL" />
          <CheckboxInput
            id="NORMAL"
            checked={normal}
            setChange={() => onFilterCliced("normal")}
          />
        </li>
        <li>
          <Label idFor="DAILY" value="DAILY" />
          <CheckboxInput
            id="DAILY"
            checked={daily}
            setChange={() => onFilterCliced("daily")}
          />
        </li>
        <li>
          <Label idFor="WORKOUT" value="WORKOUT" />
          <CheckboxInput
            id="WORKOUT"
            checked={workout}
            setChange={() => onFilterCliced("workout")}
          />
        </li>

        <li>
          <Label idFor="BUSINESS" value="BUSINESS" />
          <CheckboxInput
            id="BUSINESS"
            checked={business}
            setChange={() => onFilterCliced("business")}
          />
        </li>
        <li>
          <Label idFor="TRAVEL" value="TRAVEL" />
          <CheckboxInput
            id="TRAVEL"
            checked={travel}
            setChange={() => onFilterCliced("travel")}
          />
        </li>
        <li>
          <Label idFor="FOOD" value="FOOD" />
          <CheckboxInput
            id="FOOD"
            checked={food}
            setChange={() => onFilterCliced("food")}
          />
        </li>
      </ul>
    </nav>
  );
}
