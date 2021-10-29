import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Tile from "./Tile";

const campaign = {
  id: `thao---testingId`,
  startDate: 1621863173300,
  endDate: 1622381520000,
  targetImpressions: 203,
};
let component;
describe("renders a campaign tile by default", () => {
  beforeEach(() => {
    component = render(
      <Tile
        id={campaign.id}
        startDate={campaign.startDate}
        endDate={campaign.endDate}
        targetImpressions={campaign.targetImpressions}
      />
    );
  });

  test("renders campaign id", () => {
    expect(component.container).toHaveTextContent(campaign.id);
  });
});
