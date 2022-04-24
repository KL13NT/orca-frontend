import { FormEvent, FunctionComponent } from "react";

import Button from "./button";
import Input from "./input";
import Modal from "./modal";

interface CreateProjectModalProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

const CreateProjectModal: FunctionComponent<CreateProjectModalProps> = ({
  open,
  setOpen,
  onSubmit,
}) => {
  return (
    <Modal open={open} fullscreen>
      <form
        className="bg-white drop-shadow-xl flex flex-col p-8 rounded-xl"
        onSubmit={onSubmit}
      >
        <h1>Create Project</h1>
        <Input placeholder="Enter project name" name="name" className="mt-8" />
        <Button className="mt-8">Create</Button>

        <Button
          type="button"
          className="bg-red-600 text-white mt-2"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
