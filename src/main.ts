import api from './core/api';

const port = process.env.PORT || 3000;
api.listen(port, () => {
  console.log(`✔ 🙋‍♂️ Running server on localhost:${port}`);
});
