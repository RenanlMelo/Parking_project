import { useOutletContext } from "react-router-dom";
import { ProfilePage } from "../components/ProfilePage";

export const Profile = () => {
  const { image, setImage } = useOutletContext<{
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
  }>();

  return (
    <>
      <ProfilePage image={image} setImage={setImage} />
    </>
  );
};
