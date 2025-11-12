export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phoneNumber?: string;
  postalCode?: string;
  country?: string;
  message: string;
};
