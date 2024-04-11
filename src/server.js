import { Provider } from "react-redux";
import * as express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import RoutesList, { routeConfig } from "./routes";
import createStoreInstance from "./store";
import { Helmet } from "react-helmet";

const app = express();

app.use(express.static("dist/public"));

const port = process.env.PORT || 3000;

const helmet = Helmet.renderStatic();

app.get("*", (req, res) => {
  const store = createStoreInstance();
  const promises = routeConfig.map((route) => {
    if (route.path === req.url && route.component.getInitData) {
      return route?.component?.getInitData(store);
    } else {
      return null;
    }
  });
  Promise.all(promises.filter((promise) => promise)).then(() => {
    const preloadedState = store.getState();
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <RoutesList />
        </StaticRouter>
      </Provider>,
    );
    const html = `<!DOCTYPE html>
          <html lang="en">
            <head>
               ${helmet?.title?.toString()}
               <meta charset="UTF-8">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                  window.__preloadedState__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="./bundle_client.js"></script>
            </body>
          </html>`;
    res.end(html);
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
