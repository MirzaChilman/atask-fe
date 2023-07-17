import { searchAtom } from "@/atoms/Search";
import { useSetAtom } from "jotai";
import { Button, TextInput } from "flowbite-react";
import useSearchUser from "@/hooks/useSearchUser";
import React, { useRef } from "react";

const Form = () => {
  const setDebouncedValue = useSetAtom(searchAtom);
  const { refetch } = useSearchUser();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFetchUser = () => {
    refetch();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isInputFocused = inputRef.current === document.activeElement;
    if (event.key.toLowerCase() === "enter" && isInputFocused) {
      handleFetchUser();
    }
  };

  return (
    <div className="mt-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            onKeyDown={handleKeyDown}
            onChange={(e) => setDebouncedValue(e.target.value.toLowerCase())}
            ref={inputRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="button" onClick={handleFetchUser}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
