// ISO8601 date type (YYYY-MM-DD, YYYY-MM, or YYYY)
type ISO8601Date = string;

interface Basics {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: Array<{
    network?: string;
    username?: string;
    url?: string;
  }>;
}

interface WorkExperience {
  name?: string;
  location?: string;
  description?: string;
  position?: string;
  url?: string;
  startDate?: ISO8601Date;
  endDate?: ISO8601Date;
  summary?: string;
  highlights?: string[];
}

interface VolunteerExperience {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: ISO8601Date;
  endDate?: ISO8601Date;
  summary?: string;
  highlights?: string[];
}

interface Education {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: ISO8601Date;
  endDate?: ISO8601Date;
  score?: string;
  courses?: string[];
}

interface Award {
  title?: string;
  date?: ISO8601Date;
  awarder?: string;
  summary?: string;
}

interface Certificate {
  name?: string;
  date?: ISO8601Date;
  url?: string;
  issuer?: string;
}

interface Publication {
  name?: string;
  publisher?: string;
  releaseDate?: ISO8601Date;
  url?: string;
  summary?: string;
}

interface Skill {
  name?: string;
  level?: string;
  keywords?: string[];
}

interface Language {
  language?: string;
  fluency?: string;
}

interface Interest {
  name?: string;
  keywords?: string[];
}

interface Reference {
  name?: string;
  reference?: string;
}

interface Project {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: ISO8601Date;
  endDate?: ISO8601Date;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

interface Meta {
  canonical?: string;
  version?: string;
  lastModified?: string;
}

interface Resume {
  $schema?: string;
  basics?: Basics;
  work?: WorkExperience[];
  volunteer?: VolunteerExperience[];
  education?: Education[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
  meta?: Meta;
}
