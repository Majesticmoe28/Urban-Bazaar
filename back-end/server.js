const app = require('./app');

const PORT = process.env.PORT || 5000; // Use environment variable or default to port 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
