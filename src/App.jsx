import AppLayout from "../components/AppLayout";
import DashBoard from "../components/DashBoard";
import DashBoardDetails from "../components/DashBoardDetails";
import NavBar from "../components/NavBar";

function App() {
  return (
    <AppLayout>
      <NavBar />
      <DashBoard />
      <DashBoardDetails />
    </AppLayout>
  );
}

export default App;
