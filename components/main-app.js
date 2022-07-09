function MyApp() {
  return (
  <div>
    <h1>👋 Hello, world! 🌍😃</h1>
    <HookExample></HookExample>
    <AnotherHook></AnotherHook>
  </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

