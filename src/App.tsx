import Index from "@/pages/Index";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();
  return <Index />;
};

export default App;
