import { atom } from "jotai";

// ログイン処理を仮定
type User = {
  email: string;
  username: string;
};

export const userAtom = atom<User | null>(null);
