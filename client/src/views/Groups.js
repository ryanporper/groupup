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
        <h1 className="navbar-brand mb-0">GroupUp</h1>
        <div className="navbar-nav justify-content-between">
          <Link to="/groups/new" className="btn btn-sm btn-outline-success mx-1">
            Create a group
          </Link>
        </div>
      </nav>
      <h2>Active Groups:</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Type</h3>
            </th>
            <th>
              <h3>Location</h3>
            </th>
            <th>
              <h3>Posted By</h3>
            </th>
            <th>
              <h3>Actions</h3>
            </th>
          </tr>
        </thead>
        {groups.map((group) => {
          const { _id, groupName, groupType, location, desc, creator, price } = group;
          return (
            <tbody>
              <tr>
                <td>
                  <Link to={`/groups/${_id}`}>
                    <h4>{groupName}</h4>
                  </Link>
                </td>
                <td>
                  <h4>{groupType}</h4>
                </td>
                <td>
                  <h4>{location}</h4>
                </td>
                <td>
                  <h4>{creator}</h4>
                </td>
                <td>
                  <Link to={`/groups/${_id}`} className="btn btn-outline-primary mx-1">
                    Details
                  </Link>
                  <Link
                    to={`/groups/${_id}/edit`}
                    className="btn btn-outline-warning mx-1"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AllGroups;
