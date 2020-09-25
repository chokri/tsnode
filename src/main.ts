import api from './core/api';

const port = process.env.PORT || 3000;
api.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`✔ 🙋‍♂️ Running server on localhost:${port}`);
});
