export type ApiCredentials = {
  ApiKey: `Key ${string}-${number}-${string}-${number}`;
};

// Valid example: Properly formatted API key.
const validCredentials: ApiCredentials = {
  ApiKey: "Key ABCD-1234-EFGH-5678",
};

// Invalid example 1: Missing the required "Key " prefix.
const invalidCredentials1: ApiCredentials = {
  ApiKey: "ABCD-1234-EFGH-5678",
};

// Invalid example 2: Only three segments instead of four.
const invalidCredentials2: ApiCredentials = {
  ApiKey: "Key ABCD-1234-EFGH",
};

// Invalid example 3: Five segments instead of four.
const invalidCredentials3: ApiCredentials = {
  ApiKey: "Key ABCD-1234-EFGH-5678-XYZ",
};

// Invalid example 4: Missing dashes between segments.
const invalidCredentials4: ApiCredentials = {
  ApiKey: "Key ABCD1234EFGH5678",
};
