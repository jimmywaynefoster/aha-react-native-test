
export interface ContactInfo {
  phone: string;
}

export interface Insurance {
  insurance: string;
}

export interface Language {
  language: string;
}

export interface NextAppointment {
  appointments: string;
  appointments_next_week: boolean;
  appointments_this_week: boolean;
  appointments_today?: any;
  appointments_tomorrow?: boolean;
  dur: number;
  existing_patient_allow?: boolean;
  new_patient_allow?: boolean;
  specialty: string;
  type: string;
}

export interface Sees {
  adolescents: boolean;
  adults?: any;
  children: boolean;
  geriatrics?: any;
  infants_toddlers: boolean;
  newborns: boolean;
}

export interface Specialty {
  board_certified: boolean;
  primary_specialty: boolean;
  specialty: string;
}

export interface Doctor {
  accept_new_patients: boolean;
  address_line1: string;
  address_line2: string;
  address_type_code: string;
  city: string;
  closest_appointment: Date;
  contact_info: ContactInfo;
  county: string;
  credentials: string;
  disabled: boolean;
  distance_miles: number;
  first_name: string;
  gender: string;
  insurance: Insurance[];
  is_pcp: boolean;
  is_specialist?: any;
  languages: Language[];
  last_name: string;
  location_id: string;
  location_name: string;
  medicaid_number?: any;
  medicare_number?: any;
  middle_name: string;
  next_appointments: NextAppointment[];
  npi: string;
  on_my_careteam: boolean;
  open_scheduling: boolean;
  photo_profile_url: string;
  provider_type: string;
  sees: Sees;
  specialties: Specialty[];
  star_rating_average: number;
  star_rating_count: number;
  state_code: string;
  suffix?: any;
  uses_health_systems_emr: boolean;
  video_profile_url?: any;
  video_visits: boolean;
  website_url?: any;
  whole_name: string;
  zip_code: string;
}
