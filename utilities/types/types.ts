export type Language = "georgian" | "english";

export interface HomeProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export interface ExtendedHomeProps extends HomeProps {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export interface ComponentProps {
  language: Language;
}

