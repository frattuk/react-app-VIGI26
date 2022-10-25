import { Link, useParams } from "react-router-dom";
import Hero from "../../components/Hero";

const Profile = () => {
  const { id } = useParams();
  return (
    <div>
      <Hero title={`Profilis ${id}`} subtitle="Linkime geros dienos!" />

      <Link to="/">
        <button>Liu profile</button>
      </Link>
    </div>
  );
};

export default Profile;
