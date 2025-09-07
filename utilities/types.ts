export type Language = "georgian" | "english";

export interface HomeProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export interface ComponentProps {
  language: Language;
}