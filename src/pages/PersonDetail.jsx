import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();

  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  console.log(id);

  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // const { state: person } = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(person);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <div className="text-center">
        <img
          width="200px"
          src="https://cdn.vectorstock.com/i/1000v/49/90/loading-icon-on-black-vector-24544990.jpg"
          alt="loading"
        />
      </div>
    );
  }

  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
