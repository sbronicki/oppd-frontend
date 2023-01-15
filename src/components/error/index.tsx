function Error({ error }: Error) {
  return <div className="error-message">Error: {error}</div>;
}
export default Error;
interface Error {
  error: string;
}
