import Header from "./components/Header/Header";
import NewTask from "./components/NewTask/NewTask"
import AppContext from "./AppContext/AppContext";

export default function App() {
  return(
    <AppContext>
      <Header />
      <NewTask />

      
    </AppContext>
  )
}