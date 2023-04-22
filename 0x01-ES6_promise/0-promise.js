export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    const result = success ? resolve() : reject();
    return result;
  });
}
