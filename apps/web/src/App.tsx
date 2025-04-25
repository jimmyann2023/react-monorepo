import { Button } from '@repo/shadcn-ui/components/button';

function App() {
  return (
    <>
      <Button className="m-5 cursor-pointer" size="lg" variant="destructive">
        shadcn-ui
      </Button>
      <div className="text-blue-500">Hello word</div>
    </>
  );
}

export default App;
