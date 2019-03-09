import '@babel/polyfill';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyPaser from 'body-parser';
import App from './src/App';
import { Helmet } from 'react-helmet';
import createStore from './src/store/store_server';
import { Provider } from 'react-redux';

// Create store
const store = createStore();
const reduxState = store.getState();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyPaser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
    </head>
    <body>
        <div id='root'>${content}</div>

        <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
        </script>
        <script src='client.bundle.js'></script>   
    </body>
  </html>`;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);

});
