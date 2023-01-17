// import Parcel from "single-spa-react/parcel";
import { ItemsProvider } from "@elysiannxt/utils";
import { Layout2 } from "@elysiannxt/layout";

import Content from "./main/Content";

export default function Root(props) {
  return (
    <ItemsProvider context={{ name: props.name }}>
      <Layout2>
        <Content />
      </Layout2>
    </ItemsProvider>
  );
}
