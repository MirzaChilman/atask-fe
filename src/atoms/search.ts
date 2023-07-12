import atomWithDebounce from "@/helpers/atomWithDebounce";

export const {
  isDebouncingAtom,
  debouncedValueAtom,
  clearTimeoutAtom,
  currentValueAtom,
} = atomWithDebounce("");
