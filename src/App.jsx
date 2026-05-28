import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-black p-24 app-background">
      <div className="mx-auto h-[calc(100vh-12rem)] overflow-hidden rounded-3xl bg-white shadow-lg glass-card">
        <div className="app-container h-full">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;