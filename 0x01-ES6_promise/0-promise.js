export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    success ? resolve() : reject();
  });
}
