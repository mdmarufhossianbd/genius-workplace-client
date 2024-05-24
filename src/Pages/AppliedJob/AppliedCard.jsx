import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const AppliedCard = ({job}) => {

    const {jobId, jobTitle, minSalary, maxSalary, deadline, publishDate,} = job;

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
                <Link to={`/job-details/${jobId}`}><button>View Details</button></Link>
            </td>
        </tr>

    );
};

AppliedCard.propTypes = {
    job: PropTypes.object
}

export default AppliedCard;