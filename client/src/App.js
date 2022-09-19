import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { AllGroups } from "./views/Groups";
import { ViewGroup } from "./views/ViewGroup";
import { EditGroup } from "./views/EditGroup";
import { NewGroup } from "./views/NewGroup";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/groups" replace />} />
        <Route path="/groups" element={<AllGroups />} />
        <Route path="/groups/:id/edit" element={<EditGroup />} />
        <Route path="/groups/:id" element={<ViewGroup />} />
        <Route path="/groups/new" element={<NewGroup />} />
      </Routes>
    </div>
  );
}

export default App;
