import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllGroups } from "../services/internalApiService";

export const AllGroups = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((data) => {
        console.log(data);
        setGroups(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">
          <h1>GroupUp⬆️</h1>
        </h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/groups/login"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            Login/Register
          </Link>
          <Link
            to="/groups/new"
            className="btn btn-sm btn-outline-success mx-1"
          >
            Create a group
          </Link>
        </div>
      </nav>
      <h2 className="text-center">Active Groups:</h2>
      <div className="">
        {groups.map((group) => {
          const { _id, groupName, groupDate, desc, location, creator, price } = group;

          return (
            <div key={_id} className="shadow mb-4 rounded border p-4">
              <Link to={`/groups/${_id}`}>
                <h4>{groupName}</h4>
              </Link>
              <p>Date: {groupDate}</p>
              <p>Description: {desc}</p>
              <p>Location: {location}</p>
              {price && <p>Price: ${price}</p>}
              <p>Posted by: {creator}</p>

              <div className="mt-2">
                <Link
                  to={`/groups/${_id}/edit`}
                  className="btn btn-sm btn-outline-warning mx-1"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGroups;
