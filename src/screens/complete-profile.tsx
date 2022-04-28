import { useAuth0 } from "@auth0/auth0-react";
import { FormEventHandler } from "react";

import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";
import { completeUserProfile } from "../utils/api";

const CompleteProfile = () => {
  const { getAccessTokenSilently } = useAuth0();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const data = new FormData(ev.target as HTMLFormElement);

    try {
      const token = await getAccessTokenSilently();

      console.log(token);

      await completeUserProfile(
        {
          name: data.get("name"),
        },
        token
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal>
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h1>Complete your profile</h1>
        <p>Complete your profile to continue.</p>
        <Input
          name="name"
          autoComplete="name"
          placeholder="First name"
          className="mt-6"
          required
        />
        <Button type="submit" className="mt-6">
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default CompleteProfile;
