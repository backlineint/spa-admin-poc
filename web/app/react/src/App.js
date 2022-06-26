import "./App.css";
import { DrupalState } from "@gdwc/drupal-state";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const store = new DrupalState({
        apiBase: "https://spa-admin-poc.lndo.site",
      });

      const data = await store.getObjectByPath({
        objectName: "node--article",
        path: window.location.pathname,
      });
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data?.title && (
        <div
          data-decoupled-contextual={`entity/node:${data?.drupal_internal__nid}`}
        >
          <h2>{data?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data?.body?.processed }} />
        </div>
      )}
      <div id="spa-admin"></div>
    </div>
  );
}

export default App;
