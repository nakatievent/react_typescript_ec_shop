import { memo } from "react";
import { Root } from "../../src/mui-treasury/layout-core-v5";

export const Home = memo(() => {

  return (
    <Root
      scheme={{
        header: {
          config: {
            xs: {
              position: "sticky",
              height: 56,
            },
          },
        },
      }}
    ></Root>
  );
});
