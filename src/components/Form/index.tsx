import { searchAtom } from "@/atoms/Search";
import { useSetAtom } from "jotai";
import { Button, TextInput } from "flowbite-react";
const Form = () => {
  const setDebouncedValue = useSetAtom(searchAtom);
  return (
    <div className="mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setDebouncedValue(e.target.value.toLowerCase())}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="button">Search</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
