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

      const data = await store.getObject({ objectName: "node--article" });
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <div
          data-decoupled-contextual={`entity/node:${item.drupal_internal__nid}`}
        >
          <h2>{item.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.body.processed }} />
        </div>
      ))}
      <div id="spa-admin"></div>
    </div>
  );
}

export default App;
