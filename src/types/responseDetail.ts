export interface Provider {
  bio_html?: any;
  credentials_abbr: string;
  disabled: boolean;
  first_name: string;
  gender: string;
  is_pcp: boolean;
  is_specialist?: any;
  last_name: string;
  medicaid_number?: any;
  medicare_number?: any;
  middle_name: string;
  on_my_careteam?: any;
  photo_profile_url: string;
  provider_type: string;
  npi: string;
  star_rating_average: number;
  star_rating_count: number;
  suffix?: any;
  uses_health_systems_emr?: any;
  video_profile_url?: any;
  website_url?: any;
  whole_name: string;
}

export interface Param {
  latitude: number;
  location_id?: any;
  longitude: number;
  my_providers?: any;
  npi: string;
  log_id: string;
  prior_log_id?: any;
}

export interface Sees {
  newborns: boolean;
  infants_toddlers: boolean;
  children: boolean;
  adolescents: boolean;
  adults: boolean;
  geriatrics: boolean;
}

export interface Location {
  accept_new_patients: boolean;
  address_line1: string;
  address_line2?: any;
  address_type_code: string;
  city: string;
  county: string;
  distance_miles: number;
  email_address?: any;
  hours?: any;
  hours_json?: any;
  hours_of_operation?: any;
  latitude: number;
  location_name: string;
  location_npi?: any;
  location_id: string;
  longitude: number;
  open_scheduling: boolean;
  phone_number: string;
  provider_location_hours_id?: any;
  sees: Sees;
  state_code: string;
  tytocare_visits?: any;
  video_visits: boolean;
  zip_code: string;
}

export interface Specialty {
  board_certified: boolean;
  primary_specialty: boolean;
  specialty: string;
}

export interface Service {
  service_id: string;
  name: string;
}

export interface CachedSlot {
  slot: Date;
}

export interface AppointmentType {
  appointment_type: string;
  cached_slots: CachedSlot[];
  duration_minutes: number;
  existing_patient_allow?: boolean;
  location_id: string;
  new_patient_allow?: boolean;
  on_my_careteam?: any;
  provider_location_specialty_appointment_type_id: string;
  specialty: string;
}

export interface Insurance {
  insurance_accepted: string;
}

export interface Language {
  language_spoken: string;
}

export interface Affiliation {
  affiliation_npi: string;
  hospital_affiliations: string;
}

export interface Education {
  education_type: string;
  school_name: string;
  year_graduated: number;
}

export interface Timing {
  address: number;
  affiliations: number;
  appointment_types: number;
  careteam: number;
  certifications: number;
  education: number;
  end_appointment_type: Date;
  insurance: number;
  language: number;
  provider_info: number;
  provider_type: number;
  services: number;
  specialty: number;
  start_appointment_type: Date;
  total_duration: number;
}

export interface Response {
  provider: Provider[];
  params: Param[];
  locations: Location[];
  specialties: Specialty[];
  services: Service[];
  appointment_types: AppointmentType[];
  insurances: Insurance[];
  languages: Language[];
  affiliations: Affiliation[];
  education: Education[];
  timings: Timing[];
}

export interface Telemetry {
  duration: string;
  durationHumanized: string;
  events: any[];
}

export interface Meta {
  telemetry: Telemetry;
}

export interface DetailResponse {
  response: Response;
  meta: Meta;
}