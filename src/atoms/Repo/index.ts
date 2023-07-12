import { Repository } from "@/hooks/useRepos/types";
import { atom } from "jotai";

export const repoKeywordAtom = atom("");
export const repoUserAtom = atom(new Map<string, Repository[]>());
