import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

const TableBody = ({job, handleDelete}) => {
    const {_id, jobTitle, minSalary, maxSalary, deadline, publishDate} = job;

    return (
        <tr className="border-b border-blue-gray-50 py-4">
            <td className="p-4">
                <h2>{jobTitle}</h2>
            </td>
            <td className="flex gap-3 p-4">
                <p>Min : $ {minSalary}</p>
                <p>Max : $ {maxSalary}</p>
            </td>
            <td className="p-4">
                <p>{new Date(publishDate).toLocaleDateString()}</p>
            </td>
            <td className="p-4">
                <p>{new Date(deadline).toLocaleDateString()}</p>
            </td>
            <td className="p-4 flex gap-2">
                <button onClick={() => handleDelete(_id)}>Delete</button>
                <Link to={`/update-job/${_id}`}><button>Update</button></Link>
                
                <Link to={`/job-details/${_id}`}><button>View Details</button></Link>
            </td>
        </tr>

    );
};
TableBody.propTypes = {
    job: PropTypes.object,
    handleDelete: PropTypes.func
}
export default TableBody;