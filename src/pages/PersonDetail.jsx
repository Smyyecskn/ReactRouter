import { useLocation, useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //idnin bu componente geçişini sağladık.
  console.log(id);

  const { state: person } = useLocation();
  console.log(person);

  return (
    <div className="container text-center g-2">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img src={person?.avatar} alt="img" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate(-1)} className="m-2 btn btn-warning">
          Go Back
        </button>
        <button onClick={() => navigate("/")} className=" btn btn-success me-2">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
