/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Charge = {
  __typename?: 'Charge';
  addresses?: Maybe<Scalars['JSON']['output']>;
  cancelUrl?: Maybe<Scalars['String']['output']>;
  chargeId: Scalars['Int']['output'];
  code: Scalars['String']['output'];
  commissions: Array<Maybe<Commission>>;
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exchangeRates?: Maybe<Scalars['JSON']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  feeRate: Scalars['Float']['output'];
  hostedUrl: Scalars['String']['output'];
  localExchangeRates?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  paymentThreshold?: Maybe<Scalars['JSON']['output']>;
  payments: Array<Maybe<Payment>>;
  pricing: Scalars['JSON']['output'];
  pricingType: Scalars['String']['output'];
  purchaseActivity?: Maybe<PurchaseActivity>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChargeBase = {
  __typename?: 'ChargeBase';
  addresses?: Maybe<Scalars['JSON']['output']>;
  cancelUrl?: Maybe<Scalars['String']['output']>;
  chargeId: Scalars['Int']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exchangeRates?: Maybe<Scalars['JSON']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  feeRate: Scalars['Float']['output'];
  hostedUrl: Scalars['String']['output'];
  localExchangeRates?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  paymentThreshold?: Maybe<Scalars['JSON']['output']>;
  pricing: Scalars['JSON']['output'];
  pricingType: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChargeResult = {
  __typename?: 'ChargeResult';
  data: Array<Maybe<Charge>>;
  nextPageCursor?: Maybe<Scalars['Int']['output']>;
};

export type Commission = {
  __typename?: 'Commission';
  amount: Scalars['Float']['output'];
  charge?: Maybe<Charge>;
  chargeId?: Maybe<Scalars['Int']['output']>;
  commissionId: Scalars['Int']['output'];
  commissionRate: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Int']['output']>;
  isTransferred: Scalars['Boolean']['output'];
  tier: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommissionBase = {
  __typename?: 'CommissionBase';
  amount: Scalars['Float']['output'];
  chargeId?: Maybe<Scalars['Int']['output']>;
  commissionId: Scalars['Int']['output'];
  commissionRate: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  isTransferred: Scalars['Boolean']['output'];
  tier: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommissionRate = {
  __typename?: 'CommissionRate';
  /** The commission rate is a decimal value ranging from 0.0 to 1.0 (or 0% to 100%), representing the commission percentage assigned to a particular tier in the referral hierarchy. This rate determines the percentage of commission a user at a specific tier receives for a referral. For instance, a commission rate of 0.1 corresponds to a 10% commission rate, whereas a commission rate of 0.9999 corresponds to a 99.99% commission rate. In the database, this field is represented as a Decimal with a precision of 4 decimal places, ensuring accurate commission rate calculations down to the hundredth of a percent. */
  commissionRate: Scalars['Float']['output'];
  /** The tier represents the level in the referral hierarchy. A tier of 1 indicates a direct referral, while higher tier numbers indicate referrals further up the hierarchy. For instance, in a scenario where User A refers User B, and User B refers User C, User B is at tier 1 for User C, and User A is at tier 2 for User C. */
  tier: Scalars['Int']['output'];
};

export type CommissionResult = {
  __typename?: 'CommissionResult';
  data: Array<Maybe<Commission>>;
  nextPageCursor?: Maybe<Scalars['Int']['output']>;
};

export type CommissionTier = {
  __typename?: 'CommissionTier';
  /** The commission rate is a decimal value ranging from 0.0 to 1.0 (or 0% to 100%), representing the commission percentage assigned to a particular tier in the referral hierarchy. This rate determines the percentage of commission a user at a specific tier receives for a referral. For instance, a commission rate of 0.1 corresponds to a 10% commission rate, whereas a commission rate of 0.9999 corresponds to a 99.99% commission rate. In the database, this field is represented as a Decimal with a precision of 4 decimal places, ensuring accurate commission rate calculations down to the hundredth of a percent. */
  commissionRate: Scalars['Float']['output'];
  commissionTierId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The tier represents the level in the referral hierarchy. A tier of 1 indicates a direct referral, while higher tier numbers indicate referrals further up the hierarchy. For instance, in a scenario where User A refers User B, and User B refers User C, User B is at tier 1 for User C, and User A is at tier 2 for User C. */
  tier: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Config = {
  __typename?: 'Config';
  configId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  isReferralCodeEnabled: Scalars['Boolean']['output'];
  referralViewLevel: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateCommissionTierInput = {
  /** The commission rate is a decimal value ranging from 0.0 to 1.0 (or 0% to 100%), representing the commission percentage assigned to a particular tier in the referral hierarchy. This rate determines the percentage of commission a user at a specific tier receives for a referral. For instance, a commission rate of 0.1 corresponds to a 10% commission rate, whereas a commission rate of 0.9999 corresponds to a 99.99% commission rate. In the database, this field is represented as a Decimal with a precision of 4 decimal places, ensuring accurate commission rate calculations down to the hundredth of a percent. */
  commissionRate: Scalars['Float']['input'];
  /** The tier represents the level in the referral hierarchy. A tier of 1 indicates a direct referral, while higher tier numbers indicate referrals further up the hierarchy. For instance, in a scenario where User A refers User B, and User B refers User C, User B is at tier 1 for User C, and User A is at tier 2 for User C. */
  tier: Scalars['Int']['input'];
};

export type CreateWalletInput = {
  /** The blockchain address for the wallet. This should be a valid string that represents the wallet's address on the blockchain. */
  address: Scalars['String']['input'];
  /** The type of cryptocurrency that the wallet will hold. Valid options are defined by the `CryptoType` enum, such as 'DAI', 'USDC', 'ETH', etc. This field must match one of the predefined cryptocurrency types. */
  cryptoType: CryptoType;
  /** The unique identifier of the customer to whom the wallet belongs. This field must be populated with an existing customer's ID. */
  customerId: Scalars['Int']['input'];
  /** An optional boolean flag indicating whether this wallet should be set as the default wallet for the associated customer. If `true`, this wallet is considered the primary wallet for transactions. If omitted, the wallet is not set as the default by default. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CryptoType {
  Ape = 'APE',
  Bch = 'BCH',
  Btc = 'BTC',
  Dai = 'DAI',
  Doge = 'DOGE',
  Eth = 'ETH',
  Ltc = 'LTC',
  Pmatic = 'PMATIC',
  Pusdc = 'PUSDC',
  Pweth = 'PWETH',
  Shib = 'SHIB',
  Usdc = 'USDC',
  Usdt = 'USDT'
}

export type Customer = {
  __typename?: 'Customer';
  charges: Array<Maybe<Charge>>;
  commissions: Array<Maybe<Commission>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId: Scalars['Int']['output'];
  customerStatus: CustomerStatus;
  email: Scalars['String']['output'];
  emailStatus: EmailStatus;
  image?: Maybe<Image>;
  name: Scalars['String']['output'];
  purchaseActivities: Array<Maybe<PurchaseActivity>>;
  referees?: Maybe<Array<Customer>>;
  referralCode?: Maybe<Scalars['String']['output']>;
  referralCustomerId?: Maybe<Scalars['Int']['output']>;
  referrer?: Maybe<Customer>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wallets: Array<Maybe<Wallet>>;
};

export type CustomerResult = {
  __typename?: 'CustomerResult';
  data: Array<Maybe<Customer>>;
  nextPageCursor?: Maybe<Scalars['Int']['output']>;
};

export enum CustomerRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export enum CustomerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED'
}

export type DeleteWalletInput = {
  /** The identifier of the customer who owns the wallet. This field ensures that the deletion operation is scoped to wallets under the ownership of the specified customer. */
  customerId: Scalars['Int']['input'];
  /** The unique identifier of the wallet to be deleted. This ID must correspond to an existing wallet associated with the customer specified by the `customerId` field. */
  walletId: Scalars['Int']['input'];
};

export type EmailInput = {
  email: Scalars['String']['input'];
};

export enum EmailStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type FieldRecord = {
  __typename?: 'FieldRecord';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  imageId: Scalars['Int']['output'];
  packageId?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  type: ImageType;
};

export enum ImageType {
  Customer = 'CUSTOMER',
  Package = 'PACKAGE'
}

export type JwtPayload = {
  __typename?: 'JwtPayload';
  email: Scalars['String']['output'];
  exp?: Maybe<Scalars['Int']['output']>;
  iat?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  role: CustomerRole;
  sub: Scalars['Int']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  calculateCommission: Scalars['Int']['output'];
  /**
   *
   * #### `Restricted to User and Admin. Fresh Access Token is required`
   *
   * For enhanced security, certain actions require a fresh authentication token. If you've been logged in for more than 10 minutes, you'll need to re-login to proceed with these specific actions.
   *
   * | Exception             | Code            | Status Code | Message                                                                                                                                                                                        |
   * | --------------------- | --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                                                                                                                                                                   |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["oldPassword must be a string", "oldPassword should not be empty", "oldPassword must be longer than or equal to 8 characters", "oldPassword must be shorter than or equal to 100 characters"] |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["newPassword must be a string", "newPassword should not be empty", "newPassword must be longer than or equal to 8 characters", "newPassword must be shorter than or equal to 100 characters"] |
   * | BadRequestException   | BAD_REQUEST     | 400         | Customer not found                                                                                                                                                                             |
   * | BadRequestException   | BAD_REQUEST     | 400         | Invalid old password                                                                                                                                                                           |
   * |                       | BAD_USER_INPUT  |             |                                                                                                                                                                                                |
   *
   */
  changePassword: Scalars['Boolean']['output'];
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code                  | Status Code | Message                        |
   * | --------------------- | --------------------- | ----------- | ------------------------------ |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized                   |
   * | ForbiddenException    | FORBIDDEN             | 403         | Forbidden Resource             |
   * | ConflictException     | INTERNAL_SERVER_ERROR | 409         | Commission Tier already exists |
   * |                       | BAD_USER_INPUT        |             |                                |
   *
   */
  createCommissionTier: CommissionTier;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message                                                                                                                 |
   * | --------------------- | --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource                                                                                                      |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                                                                                            |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["name must be a string", "name should not be empty"]                                                                   |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["description must be a string"]                                                                                        |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["tokenAmount must be a number", "tokenAmount should not be empty"]                                                     |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["price must be a number", "price should not be empty", "price must be a valid currency format"]                        |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["currency must be a string", "currency should not be empty", "currency must be one of the following: USD, GBP or EUR"] |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["isActive must be a boolean", "isActive should not be empty"]                                                          |
   * |                       | BAD_USER_INPUT  |             |                                                                                                                         |
   *
   */
  createTokenPackage: TokenPackage;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code            | Status Code | Message                                                       |
   * | --------------------- | --------------- | ----------- | ------------------------------------------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                                  |
   * | BadRequestException   | BAD_REQUEST     | 400         | [ "customerId should not be empty" ]                          |
   * | BadRequestException   | BAD_REQUEST     | 400         | [ "address should not be empty", "address must be a string" ] |
   * | BadRequestException   | BAD_REQUEST     | 400         | [ "type must be a valid CryptoType" ]                         |
   * | BadRequestException   | BAD_REQUEST     | 400         | Operation not allowed                                         |
   * | BadRequestException   | BAD_REQUEST     | 400         | You must have at least one ETH wallet                         |
   * | BadRequestException   | BAD_REQUEST     | 400         | Invalid ETH address                                           |
   * |                       | BAD_USER_INPUT  |             |                                                               |
   *
   */
  createWallet: Wallet;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code                  | Status Code | Message                   |
   * | --------------------- | --------------------- | ----------- | ------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized              |
   * | ForbiddenException    | FORBIDDEN             | 403         | Forbidden Resource        |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Commission Tier not found |
   * |                       | BAD_USER_INPUT        |             |                           |
   *
   */
  deleteCommissionTier: CommissionTier;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  deleteTokenPackage: TokenPackage;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code                  | Status Code | Message                               |
   * | --------------------- | --------------------- | ----------- | ------------------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized                          |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "customerId should not be empty" ]  |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "walletId should not be empty" ]    |
   * | BadRequestException   | BAD_REQUEST           | 400         | Operation not allowed                 |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Wallet not found                      |
   * | BadRequestException   | BAD_REQUEST           | 400         | You must have at least one ETH wallet |
   * |                       | BAD_USER_INPUT        |             |
   *
   */
  deleteWallet: Wallet;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message                                                                                 |
   * | --------------------- | --------------- | ----------- | --------------------------------------------------------------------------------------- |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource                                                                      |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                                                            |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["name must be a string"]                                                               |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["description must be a string"]                                                        |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["tokenAmount must be a number"]                                                        |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["price must be a number", "price must be a valid currency format"]                     |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["currency must be a string", "currency must be one of the following: USD, GBP or EUR"] |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["isActive must be a boolean"]                                                          |
   * |                       | BAD_USER_INPUT  |             |                                                                                         |
   *
   */
  editTokenPackage: TokenPackage;
  /**
   *
   * | Exception           | Code                  | Status Code | Message                                            |
   * | ------------------- | --------------------- | ----------- | -------------------------------------------------- |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer associated with this email does not exist |
   * | BadRequestException | BAD_REQUEST           | 400         | [ "email must be an email" ]                       |
   * |                     | BAD_USER_INPUT        |             |                                                    |
   * | BadRequestException | BAD_REQUEST           | 400         | Too many attempts                                  |
   *
   */
  forgetPassword: Scalars['Boolean']['output'];
  generatePresignedPost: PresignedPost;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception                    | Code                  | Status Code | Message                                                                 |
   * | ---------------------------- | --------------------- | ----------- | ----------------------------------------------------------------------- |
   * | UnauthorizedException        | UNAUTHENTICATED       | 401         | Unauthorized                                                            |
   * | BadRequestException          | BAD_REQUEST           | 400         | Invalid file extension                                                  |
   * | InternalServerErrorException | INTERNAL_SERVER_ERROR | 500         | Failed to generate pre-signed URL                                       |
   * | BadRequestException          | BAD_REQUEST           | 400         | ["type must be a valid ImageType"]                                      |
   * | BadRequestException          | BAD_REQUEST           | 400         | ["fileExtension must be a string", "fileExtension should not be empty"] |
   * |                              | BAD_USER_INPUT        |             |                                                                         |
   *
   */
  generatePresignedUrl: PresignedUrl;
  generatePresignedUrls: Array<PresignedUrl>;
  /**
   *
   * | Exception           | Code                  | Status Code | Message                                                                                                                 |
   * | ------------------- | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer associated with this email does not exist                                                                      |
   * | BadRequestException | BAD_REQUEST           | 400         | Incorrect password                                                                                                      |
   * | BadRequestException | BAD_REQUEST           | 400         | Customer not verified                                                                                                   |
   * | BadRequestException | BAD_REQUEST           | 400         | Customer is suspended                                                                                                   |
   * |                     | BAD_USER_INPUT        |             |                                                                                                                         |
   * | BadRequestException | BAD_REQUEST           | 400         | [ "email must be an email" ]                                                                                            |
   * | BadRequestException | BAD_REQUEST           | 400         | [ "password must be longer than or equal to 8 characters", "password must be shorter than or equal to 100 characters" ] |
   *
   * ---
   *
   *  ```json
   *  // Response with String!
   *  {"data": {"login": "Login successful"}}
   *  ```
   *
   */
  login: Scalars['String']['output'];
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * ---
   *
   *  ```json
   *  // Response with String!
   *  {"data": {"logout": "Logout successful"}}
   *  ```
   *
   */
  logout: Scalars['String']['output'];
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception                    | Code                  | Status Code | Message                            |
   * |------------------------------|-----------------------|-------------|------------------------------------|
   * | UnauthorizedException        | UNAUTHENTICATED       | 401         | Unauthorized                       |
   * | InternalServerErrorException | INTERNAL_SERVER_ERROR | 500         | Unexpected charge object structure |
   * | InternalServerErrorException | INTERNAL_SERVER_ERROR | 500         | Failed to create charge            |
   * | InternalServerErrorException | INTERNAL_SERVER_ERROR | 500         | Failed recording new charge        |
   * | NotFoundException            | INTERNAL_SERVER_ERROR | 404         | Token Package not found            |
   * | NotFoundException            | INTERNAL_SERVER_ERROR | 404         | Token Price not found              |
   * | NotFoundException            | INTERNAL_SERVER_ERROR | 404         | Quantity token not provided        |
   * |                              | BAD_USER_INPUT        |             |                                    |
   *
   */
  purchaseTokens: Scalars['String']['output'];
  /**
   *
   * | Exception             | Code            | Status Code | Message               |
   * | --------------------- | --------------- | ----------- | --------------------- |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Invalid refresh token |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Customer not found    |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Customer is suspended |
   *
   * ---
   *
   *  ```json
   *  // Response with String!
   *  {"data": {"refreshTokens": "Refresh token successful"}}
   *  ```
   *
   */
  refreshTokens: Scalars['String']['output'];
  /**
   *
   * If the Admin sets the `isReferralCodeEnabled` flag in the `Config` table, the error message "Referral code is required" will appear if the Customer does not provide the `referralCode` during registration. `referralCode` is optional if Admin unsets the `isReferralCodeEnabled` flag.
   *
   * | Exception           | Code                  | Status Code | Message                                                                                                   |
   * | ------------------- | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
   * | BadRequestException | BAD_REQUEST           | 400         | ["name must be longer than or equal to 2 characters", "name must be a string"]                             |
   * | BadRequestException | BAD_REQUEST           | 400         | ["email must be an email"]                                                                                |
   * | BadRequestException | BAD_REQUEST           | 400         | ["password must be longer than or equal to 8 characters", "password must be shorter than or equal to 100 characters"] |
   * |                     | BAD_USER_INPUT        |             |                                                                                                           |
   * | BadRequestException | BAD_REQUEST           | 400         | Referral code is required                                                                                 |
   * | BadRequestException | BAD_REQUEST           | 400         | Invalid referral code                                                                                     |
   * | ConflictException   | INTERNAL_SERVER_ERROR | 409         | Email already exists                                                                                      |
   *
   */
  register: Customer;
  /**
   *
   * | Exception           | Code                  | Status Code | Message                        |
   * | ------------------- | --------------------- | ----------- | ------------------------------ |
   * | BadRequestException | BAD_REQUEST           | 400         | Verification token has expired |
   * | BadRequestException | BAD_REQUEST           | 400         | Verification token is invalid  |
   * |                     | BAD_USER_INPUT        |             |                                |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer not found             |
   *
   */
  registerAdmin: Scalars['Boolean']['output'];
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * | BadRequestException   | BAD_REQUEST     | 400         | Customer not found |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  reinstateCustomer: Customer;
  /**
   *
   * This method can be used together with `registerAdmin mutation` if token expired/invalid or admin forget password.
   *
   * | Exception           | Code                  | Status Code | Message                                            |
   * | ------------------- | --------------------- | ----------- | -------------------------------------------------- |
   * | BadRequestException | BAD_REQUEST           | 400         | Too many attempts                                  |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer associated with this email does not exist |
   *
   */
  resendAdminRegistrationEmail: Scalars['Boolean']['output'];
  /**
   *
   * This method can be used with `mutation verifyEmail` if verification token is invalid (like link expired).
   *
   * | Exception           | Code                  | Status Code | Message                                            |
   * | ------------------- | --------------------- | ----------- | -------------------------------------------------- |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer associated with this email does not exist |
   * | BadRequestException | BAD_REQUEST           | 400         | Too many attempts                                  |
   * |                     | BAD_USER_INPUT        |             |                                                    |
   *
   */
  resendEmailVerification: Scalars['Boolean']['output'];
  /**
   *
   * | Exception           | Code                  | Status Code | Message                                                                                                                 |
   * | ------------------- | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
   * | NotFoundException   | INTERNAL_SERVER_ERROR | 404         | Customer associated with this email does not exist                                                                      |
   * | BadRequestException | BAD_REQUEST           | 400         | [ "token must be a string", "token should not be empty" ]                                                               |
   * | BadRequestException | BAD_REQUEST           | 400         | [ "password must be longer than or equal to 8 characters", "password must be shorter than or equal to 100 characters" ] |
   * | BadRequestException | BAD_REQUEST           | 400         | Customer not found                                                                                                      |
   * |                     | BAD_USER_INPUT        |             |                                                                                                                         |
   *
   */
  resetPassword: Scalars['Boolean']['output'];
  /**
   *
   * #### `Restricted to Admin only`
   *
   * After Frontend uploading image to S3 bucket, save the path using the following format `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key-from-generatePresignedUrl-mutation}` . You can find an example in the `upload.spec.ts` file located in the end-to-end test folder.
   *
   * | Exception             | Code            | Status Code | Message                                               |
   * | --------------------- | --------------- | ----------- | ----------------------------------------------------- |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource                                    |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                          |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["path must be a string", "path should not be empty"] |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["type must be a valid ImageType"]                    |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["customerId must be an integer"]                     |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["packageId must be an integer"]                      |
   * |                       | BAD_USER_INPUT  |             |                                                       |
   *
   *
   */
  saveUploadedImage: Image;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code                  | Status Code | Message                              |
   * | --------------------- | --------------------- | ----------- | ------------------------------------ |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized                         |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "customerId should not be empty" ] |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "walletId should not be empty" ]   |
   * | BadRequestException   | BAD_REQUEST           | 400         | Operation not allowed                |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Wallet not found                     |
   * |                       | BAD_USER_INPUT        |             |
   *
   */
  setDefaultWallet: Wallet;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message                                                                                                                 |
   * | --------------------- | --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource                                                                                                      |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized                                                                                                            |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["price must be a number", "price should not be empty", "price must be a valid currency format"]                        |
   * | BadRequestException   | BAD_REQUEST     | 400         | ["currency must be a string", "currency should not be empty", "currency must be one of the following: USD, GBP or EUR"] |
   * |                       | BAD_USER_INPUT  |             |                                                                                                                         |
   *
   */
  setOrEditTokenPrice: TokenPrice;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   *
   */
  setReferralCodeEnabledStatus: Config;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   *
   */
  setReferralViewLevel: Config;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * | BadRequestException   | BAD_REQUEST     | 400         | Customer not found |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  suspendCustomer: Customer;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  toggleTokenPackageStatus: TokenPackage;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code                  | Status Code | Message                   |
   * | --------------------- | --------------------- | ----------- | ------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized              |
   * | ForbiddenException    | FORBIDDEN             | 403         | Forbidden Resource        |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Commission Tier not found |
   * |                       | BAD_USER_INPUT        |             |                           |
   *
   */
  updateCommissionTier: CommissionTier;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  updateCommissionTransferStatus: CommissionBase;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code                  | Status Code | Message                               |
   * | --------------------- | --------------------- | ----------- | ------------------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized                          |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "customerId should not be empty" ]  |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "walletId should not be empty" ]    |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "address must be a string" ]        |
   * | BadRequestException   | BAD_REQUEST           | 400         | [ "type must be a valid CryptoType" ] |
   * | BadRequestException   | BAD_REQUEST           | 400         | Operation not allowed                 |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Wallet not found                      |
   * | BadRequestException   | BAD_REQUEST           | 400         | You must have at least one ETH wallet |
   * | BadRequestException   | BAD_REQUEST           | 400         | Invalid ETH address                   |
   * |                       | BAD_USER_INPUT        |             |
   *
   */
  updateWallet: Wallet;
  /**
   *
   * `All response messages`
   *
   * | Success | Message                           |
   * | ------- | --------------------------------- |
   * | true    | Customer is successfully verified |
   * | false   | Customer is suspended             |
   * | false   | Verification token is invalid     |
   *
   */
  verifyEmail: VerifyEmailResult;
};


export type MutationCalculateCommissionArgs = {
  chargeCode: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateCommissionTierArgs = {
  input: CreateCommissionTierInput;
};


export type MutationCreateTokenPackageArgs = {
  input: TokenPackageCreateInput;
};


export type MutationCreateWalletArgs = {
  input: CreateWalletInput;
};


export type MutationDeleteCommissionTierArgs = {
  tier: Scalars['Int']['input'];
};


export type MutationDeleteTokenPackageArgs = {
  packageId: Scalars['Int']['input'];
};


export type MutationDeleteWalletArgs = {
  input: DeleteWalletInput;
};


export type MutationEditTokenPackageArgs = {
  input: TokenPackageUpdateInput;
  packageId: Scalars['Int']['input'];
};


export type MutationForgetPasswordArgs = {
  input: EmailInput;
};


export type MutationGeneratePresignedPostArgs = {
  uploadInput: UploadInput;
};


export type MutationGeneratePresignedUrlArgs = {
  uploadInput: UploadInput;
};


export type MutationGeneratePresignedUrlsArgs = {
  uploadInputs: Array<UploadInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPurchaseTokensArgs = {
  input: PurchaseTokensInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRegisterAdminArgs = {
  input: RegisterAdminInput;
};


export type MutationReinstateCustomerArgs = {
  customerId: Scalars['Int']['input'];
};


export type MutationResendEmailVerificationArgs = {
  input: EmailInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSaveUploadedImageArgs = {
  saveImageInput: SaveImageInput;
};


export type MutationSetDefaultWalletArgs = {
  input: SetDefaultWalletInput;
};


export type MutationSetOrEditTokenPriceArgs = {
  input: TokenPriceCreateInput;
};


export type MutationSetReferralCodeEnabledStatusArgs = {
  status: Scalars['Boolean']['input'];
};


export type MutationSetReferralViewLevelArgs = {
  depth: Scalars['Int']['input'];
};


export type MutationSuspendCustomerArgs = {
  customerId: Scalars['Int']['input'];
};


export type MutationToggleTokenPackageStatusArgs = {
  packageId: Scalars['Int']['input'];
};


export type MutationUpdateCommissionTierArgs = {
  input: UpdateCommissionTierInput;
};


export type MutationUpdateCommissionTransferStatusArgs = {
  commissionId: Scalars['Int']['input'];
};


export type MutationUpdateWalletArgs = {
  input: UpdateWalletInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  charge?: Maybe<Charge>;
  chargeId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  network?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['Int']['output'];
  paymentStatus: PaymentStatus;
  status?: Maybe<Scalars['String']['output']>;
  transaction?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unresolvedReason?: Maybe<UnresolvedReason>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export enum PaymentStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  ManuallyAccepted = 'MANUALLY_ACCEPTED',
  ManuallyUnaccepted = 'MANUALLY_UNACCEPTED',
  New = 'NEW',
  Pending = 'PENDING',
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export type PresignedPost = {
  __typename?: 'PresignedPost';
  fields: Array<FieldRecord>;
  url: Scalars['String']['output'];
};

export type PresignedUrl = {
  __typename?: 'PresignedUrl';
  /** Basically a file path in S3 bucket */
  key: Scalars['String']['output'];
  /** Temporary URL for frontend to use upload to S3 bucket */
  presignedUrl: Scalars['String']['output'];
};

export type PurchaseActivity = {
  __typename?: 'PurchaseActivity';
  amount: Scalars['Float']['output'];
  charge?: Maybe<Charge>;
  chargeId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<TokenPackage>;
  packageId?: Maybe<Scalars['Int']['output']>;
  paymentStatus: PaymentStatus;
  price: Scalars['Float']['output'];
  purchaseActivityId: Scalars['Int']['output'];
  purchaseCode: Scalars['String']['output'];
  purchaseConfirmed: Scalars['Boolean']['output'];
  tokenAmount?: Maybe<Scalars['Float']['output']>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPriceId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PurchaseActivityBase = {
  __typename?: 'PurchaseActivityBase';
  amount: Scalars['Float']['output'];
  chargeId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  packageId?: Maybe<Scalars['Int']['output']>;
  paymentStatus: PaymentStatus;
  price: Scalars['Float']['output'];
  purchaseActivityId: Scalars['Int']['output'];
  purchaseCode: Scalars['String']['output'];
  purchaseConfirmed: Scalars['Boolean']['output'];
  tokenAmount?: Maybe<Scalars['Float']['output']>;
  tokenPriceId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PurchaseActivityResult = {
  __typename?: 'PurchaseActivityResult';
  data: Array<Maybe<PurchaseActivity>>;
  nextPageCursor?: Maybe<Scalars['Int']['output']>;
};

export type PurchaseTokensInput = {
  /** The URL to which users will be redirected after a cancelled payment action. It must be a live URL; localhost URLs are not accepted. One workaround for local development is to use a service like ngrok to expose your local server to the internet. For example, you could register and install ngrok, then run the command `ngrok http <FRONTEND_PORT>` to obtain a real URL that can be used here. */
  cancel_url: Scalars['String']['input'];
  /** An optional field used to specify a pre-defined package of tokens for purchase. If provided, the price, currency, and token amount will be determined based on the identified package. If not provided, the `quantity` field must be specified to determine the purchase details. */
  packageId?: InputMaybe<Scalars['Int']['input']>;
  /** An optional field used to specify the number of tokens to purchase when a `packageId` is not provided. The total amount will be calculated based on the latest token price. If `packageId` is provided, this field will be ignored. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** The URL to which users will be redirected after a succesful payment action. It must be a live URL; localhost URLs are not accepted. One workaround for local development is to use a service like ngrok to expose your local server to the internet. For example, you could register and install ngrok, then run the command `ngrok http <FRONTEND_PORT>` to obtain a real URL that can be used here. */
  redirect_url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code            | Status Code | Message      |
   * | --------------------- | --------------- | ----------- | ------------ |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized |
   *
   */
  getAllCommissionRates: Array<CommissionRate>;
  getAllReferrers: Array<ReferrerResult>;
  getAllTokenPackages: Array<Maybe<TokenPackage>>;
  /**
   *
   *
   * | Exception | Code           | Status Code | Message |
   * | --------- | -------------- | ----------- | ------- |
   * |           | BAD_USER_INPUT |             |         |
   *
   */
  getAllTokenPackagesByStatus: Array<Maybe<TokenPackage>>;
  /**
   *
   * #### `Restricted to Admin only`
   *
   *  Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  getCharges: ChargeResult;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  getCommissions: CommissionResult;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code            | Status Code | Message      |
   * | --------------------- | --------------- | ----------- | ------------ |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized |
   * |                       | BAD_USER_INPUT  |             |              |
   *
   */
  getCommissionsForCustomer: CommissionResult;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   *
   */
  getConfig?: Maybe<Config>;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   *
   */
  getCustomers: CustomerResult;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  getPurchaseActivities: PurchaseActivityResult;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * | Exception             | Code            | Status Code | Message      |
   * | --------------------- | --------------- | ----------- | ------------ |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized |
   * |                       | BAD_USER_INPUT  |             |              |
   *
   */
  getPurchaseActivitiesForCustomer: PurchaseActivityResult;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * The depth of the referral map view is determined by the `referralViewLevel` setting configured by the admin
   *
   * | Exception             | Code                  | Status Code | Message                                                           |
   * | --------------------- | --------------------- | ----------- | ----------------------------------------------------------------- |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized                                                      |
   * | BadRequestException   | BAD_REQUEST           | 400         | ["referrerId must be a number", "referrerId should not be empty"] |
   * | BadRequestException   | BAD_REQUEST           | 400         | ["startLevel must be a number"]                                   |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Customer not found                                                |
   * | BadRequestException   | BAD_REQUEST           | 400         | Start level must be non-negative                                  |
   * | BadRequestException   | BAD_REQUEST           | 400         | Raw query failed                                                  |
   * | BadRequestException   | BAD_REQUEST           | 400         | Client request error                                              |
   * | HttpException         | INTERNAL_SERVER_ERROR | 500         | An unexpected error occurred                                      |
   * |                       | BAD_USER_INPUT        |             |                                                                   |
   *
   */
  getReferralMap: Array<ReferralMap>;
  /**
   *
   *
   * | Exception | Code           | Status Code | Message |
   * | --------- | -------------- | ----------- | ------- |
   * |           | BAD_USER_INPUT |             |         |
   *
   */
  getTokenPackage?: Maybe<TokenPackage>;
  getTokenPrice?: Maybe<TokenPrice>;
  getWalletByCustomerIdAndDefault?: Maybe<Wallet>;
  getWalletsByCustomerId: Array<Wallet>;
  hello: Scalars['String']['output'];
  /**
   *
   * #### `Restricted to Admin only`
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   * |                       | BAD_USER_INPUT  |             |                    |
   *
   */
  isCommissionTransferred: Scalars['Boolean']['output'];
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * A user can query their own data
   * | Exception             | Code                  | Status Code | Message            |
   * | --------------------- | --------------------- | ----------- | ------------------ |
   * | UnauthorizedException | UNAUTHENTICATED       | 401         | Unauthorized       |
   * | NotFoundException     | INTERNAL_SERVER_ERROR | 404         | Customer not found |
   *
   */
  me: Customer;
  /**
   *
   * #### `Restricted to Admin only`
   *
   * Just for testing.
   *
   * | Exception             | Code            | Status Code | Message            |
   * | --------------------- | --------------- | ----------- | ------------------ |
   * | ForbiddenException    | FORBIDDEN       | 403         | Forbidden Resource |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized       |
   *
   */
  protectedAdminMethod: JwtPayload;
  /**
   *
   * #### `Restricted to User and Admin. Fresh Access Token is required`
   *
   * For enhanced security, certain actions require a fresh authentication token. If you've been logged in for more than 10 minutes, you'll need to re-login to proceed with these specific actions.
   *
   * | Exception             | Code            | Status Code | Message      |
   * | --------------------- | --------------- | ----------- | ------------ |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized |
   *
   */
  protectedFreshTokenMethod: JwtPayload;
  /**
   *
   * #### `Restricted to User and Admin`
   *
   * Just for testing. You need to login to access this protected method.
   *
   * | Exception             | Code            | Status Code | Message      |
   * | --------------------- | --------------- | ----------- | ------------ |
   * | UnauthorizedException | UNAUTHENTICATED | 401         | Unauthorized |
   *
   */
  protectedMethod: JwtPayload;
};


export type QueryGetAllReferrersArgs = {
  referralCustomerId?: InputMaybe<Scalars['Int']['input']>;
  tier: Scalars['Int']['input'];
};


export type QueryGetAllTokenPackagesByStatusArgs = {
  isActive: Scalars['Boolean']['input'];
};


export type QueryGetChargesArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  limit?: Scalars['Int']['input'];
};


export type QueryGetCommissionsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  isTransferred?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCommissionsForCustomerArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  isTransferred?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCustomersArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  customerRole?: InputMaybe<CustomerRole>;
  customerStatus?: InputMaybe<CustomerStatus>;
  emailStatus?: InputMaybe<EmailStatus>;
  limit?: Scalars['Int']['input'];
};


export type QueryGetPurchaseActivitiesArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  limit?: Scalars['Int']['input'];
  paymentStatus?: InputMaybe<PaymentStatus>;
  purchaseConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetPurchaseActivitiesForCustomerArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit?: Scalars['Int']['input'];
  paymentStatus?: InputMaybe<PaymentStatus>;
  purchaseConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetReferralMapArgs = {
  input: ReferralInput;
};


export type QueryGetTokenPackageArgs = {
  packageId: Scalars['Int']['input'];
};


export type QueryGetWalletByCustomerIdAndDefaultArgs = {
  customerId: Scalars['Int']['input'];
};


export type QueryGetWalletsByCustomerIdArgs = {
  customerId: Scalars['Int']['input'];
};


export type QueryIsCommissionTransferredArgs = {
  commissionId: Scalars['Int']['input'];
};

export type ReferralEntry = {
  __typename?: 'ReferralEntry';
  referees: Array<Customer>;
  referrer: Customer;
};

export type ReferralInput = {
  /** The unique identifier (`customerId`) of the referrer at the top level of the referral hierarchy. */
  referrerId: Scalars['Int']['input'];
  /** The starting level for the referral hierarchy naming scheme. Providing a value of 0 will name the levels as `level0`, `level1`, `level2`, and so on, incrementing the level number as the hierarchy descends. You can start at any number, and the naming scheme will increment accordingly. */
  startLevel?: InputMaybe<Scalars['Int']['input']>;
};

export type ReferralMap = {
  __typename?: 'ReferralMap';
  level: Scalars['String']['output'];
  referralEntries: Array<ReferralEntry>;
};

export type ReferrerResult = {
  __typename?: 'ReferrerResult';
  customerId: Scalars['Int']['output'];
  customerStatus: CustomerStatus;
  name?: Maybe<Scalars['String']['output']>;
  referralCustomerId?: Maybe<Scalars['Int']['output']>;
  tier: Scalars['Int']['output'];
};

export type RegisterAdminInput = {
  newName: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  /** The name must be a string with a length between 2 and 50 characters */
  name: Scalars['String']['input'];
  /** The password must be a string with a length between 8 and 100 characters */
  password: Scalars['String']['input'];
  /** The referral code is optional */
  referralCode?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type SaveImageInput = {
  /** Optional. You must include either `packageId` or `customerId` dependng on the `type` */
  customerId?: InputMaybe<Scalars['Int']['input']>;
  /** Optional. You must include either `packageId` or `customerId` dependng on the `type` */
  packageId?: InputMaybe<Scalars['Int']['input']>;
  /** Send a full path like this: `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key-from-generatePresignedUrl}` */
  path: Scalars['String']['input'];
  /** Can be either "PACKAGE" or "CUSTOMER" */
  type: ImageType;
};

export type SetDefaultWalletInput = {
  /** The identifier of the customer who owns the wallet. This ensures that the default wallet is set within the context of the correct customer account. */
  customerId: Scalars['Int']['input'];
  /** The unique identifier of the wallet that is to be set as the default. This ID must be that of an existing wallet owned by the customer. */
  walletId: Scalars['Int']['input'];
};

export type TokenPackage = {
  __typename?: 'TokenPackage';
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  packageId: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  tokenAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TokenPackageCreateInput = {
  /** Only "EUR", "USD" and "GBP" are supporting currencies */
  currency: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  /** You can set price in the format of 100 , 100.0 or 100.00 . Set in the format of 100.000 will be invalid */
  price: Scalars['Float']['input'];
  tokenAmount: Scalars['Float']['input'];
};

export type TokenPackageUpdateInput = {
  /** Only "EUR", "USD" and "GBP" are supporting currencies */
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Price should be in the format of 100 , 100.0 or 100.00  */
  price?: InputMaybe<Scalars['Float']['input']>;
  tokenAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type TokenPrice = {
  __typename?: 'TokenPrice';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tokenPriceId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TokenPriceCreateInput = {
  /** Only "EUR", "USD" and "GBP" are supporting currencies */
  currency: Scalars['String']['input'];
  /** You can set price in the format of 2 , 2.0 or 2.00 . Set in the format of 2.000 will be invalid */
  price: Scalars['Float']['input'];
};

export enum UnresolvedReason {
  Delayed = 'DELAYED',
  Multiple = 'MULTIPLE',
  Other = 'OTHER',
  Overpaid = 'OVERPAID',
  Underpaid = 'UNDERPAID'
}

export type UpdateCommissionTierInput = {
  /** Optional field. The commission rate is a decimal value ranging from 0.0 to 1.0 (or 0% to 100%), representing the commission percentage assigned to a particular tier in the referral hierarchy. This rate determines the percentage of commission a user at a specific tier receives for a referral. For instance, a commission rate of 0.1 corresponds to a 10% commission rate, whereas a commission rate of 0.9999 corresponds to a 99.99% commission rate. In the database, this field is represented as a Decimal with a precision of 4 decimal places, ensuring accurate commission rate calculations down to the hundredth of a percent. */
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  /** The tier represents the level in the referral hierarchy. A tier of 1 indicates a direct referral, while higher tier numbers indicate referrals further up the hierarchy. For instance, in a scenario where User A refers User B, and User B refers User C, User B is at tier 1 for User C, and User A is at tier 2 for User C. */
  tier?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateWalletInput = {
  /** An optional new blockchain address to update the wallet with. If provided, it should be a valid blockchain address string. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** An optional cryptocurrency type to update the wallet with. If provided, it must be one of the types defined in the `CryptoType` enum. */
  cryptoType?: InputMaybe<CryptoType>;
  /** The customer identifier for whom the wallet is being updated. Must correspond to the ID of an existing customer in the system. */
  customerId: Scalars['Int']['input'];
  /** An optional boolean indicating if the wallet should be set as the default wallet. If `true`, this wallet will be marked as the primary wallet for the customer. If `false` or omitted, the wallet will not be affected in terms of default status. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unique identifier of the wallet to be updated. This ID must refer to an existing wallet associated with the customer. */
  walletId: Scalars['Int']['input'];
};

export type UploadInput = {
  /** Can be either "jpg", "jpeg", "png", "gif" or "webp" */
  fileExtension: Scalars['String']['input'];
  /** This will be folder path in S3 bucket. The `type` can be either "PACKAGE" or "CUSTOMER" as defined in `enum ImageType` */
  type: ImageType;
};

export type VerifyEmailResult = {
  __typename?: 'VerifyEmailResult';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cryptoType: CryptoType;
  customerId: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  walletId: Scalars['Int']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: string };

export type SuspendCustomerMutationVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type SuspendCustomerMutation = { __typename?: 'Mutation', suspendCustomer: (
    { __typename?: 'Customer' }
    & { ' $fragmentRefs'?: { 'CustomerChargeFragmentFragment': CustomerChargeFragmentFragment } }
  ) };

export type ReinstateCustomerMutationVariables = Exact<{
  customerId: Scalars['Int']['input'];
}>;


export type ReinstateCustomerMutation = { __typename?: 'Mutation', reinstateCustomer: { __typename?: 'Customer', customerId: number, name: string, email: string, customerStatus: CustomerStatus, referralCode?: string | null, referralCustomerId?: number | null } };

export type ProtectedMethodQueryVariables = Exact<{ [key: string]: never; }>;


export type ProtectedMethodQuery = { __typename?: 'Query', protectedMethod: { __typename?: 'JwtPayload', sub: number, email: string, role: CustomerRole } };

export type GetChargesQueryVariables = Exact<{
  code?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
}>;


export type GetChargesQuery = { __typename?: 'Query', getCharges: { __typename?: 'ChargeResult', nextPageCursor?: number | null, data: Array<(
      { __typename?: 'Charge' }
      & { ' $fragmentRefs'?: { 'ChargeFragmentFragment': ChargeFragmentFragment } }
    ) | null> } };

export type CustomerChargeFragmentFragment = { __typename?: 'Customer', customerId: number, name: string, email: string, customerStatus: CustomerStatus } & { ' $fragmentName'?: 'CustomerChargeFragmentFragment' };

export type ChargeFragmentFragment = { __typename?: 'Charge', chargeId: number, code: string, name: string, description?: string | null, pricingType: string, addresses?: any | null, pricing: any, exchangeRates?: any | null, localExchangeRates?: any | null, hostedUrl: string, cancelUrl?: string | null, redirectUrl?: string | null, feeRate: number, expiresAt: any, paymentThreshold?: any | null, createdAt: any, updatedAt?: any | null, customer?: (
    { __typename?: 'Customer' }
    & { ' $fragmentRefs'?: { 'CustomerChargeFragmentFragment': CustomerChargeFragmentFragment } }
  ) | null, payments: Array<{ __typename?: 'Payment', paymentId: number, chargeId?: number | null, network?: string | null, transaction?: string | null, value?: any | null, type?: string | null, status?: string | null, paymentStatus: PaymentStatus, unresolvedReason?: UnresolvedReason | null, createdAt: any, updatedAt?: any | null } | null>, commissions: Array<{ __typename?: 'Commission', commissionId: number, customerId?: number | null, chargeId?: number | null, tier: number, commissionRate: number, amount: number, currency: string, isTransferred: boolean, createdAt: any, updatedAt?: any | null } | null>, purchaseActivity?: { __typename?: 'PurchaseActivity', purchaseActivityId: number, chargeId?: number | null, packageId?: number | null, tokenPriceId?: number | null, tokenAmount?: number | null, price: number, amount: number, currency: string, purchaseConfirmed: boolean, paymentStatus: PaymentStatus, createdAt: any, updatedAt?: any | null } | null } & { ' $fragmentName'?: 'ChargeFragmentFragment' };

export type CustomerRefFragmentFragment = { __typename?: 'Customer', customerId: number, name: string, email: string, referralCode?: string | null, customerStatus: CustomerStatus } & { ' $fragmentName'?: 'CustomerRefFragmentFragment' };

export type CustomerFragmentFragment = { __typename?: 'Customer', customerId: number, name: string, email: string, customerStatus: CustomerStatus, createdAt?: any | null, updatedAt?: any | null, emailStatus: EmailStatus, referralCode?: string | null, referralCustomerId?: number | null, referees?: Array<(
    { __typename?: 'Customer' }
    & { ' $fragmentRefs'?: { 'CustomerRefFragmentFragment': CustomerRefFragmentFragment } }
  )> | null, referrer?: (
    { __typename?: 'Customer' }
    & { ' $fragmentRefs'?: { 'CustomerRefFragmentFragment': CustomerRefFragmentFragment } }
  ) | null, wallets: Array<{ __typename?: 'Wallet', walletId: number } | null> } & { ' $fragmentName'?: 'CustomerFragmentFragment' };

export const CustomerChargeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}}]} as unknown as DocumentNode<CustomerChargeFragmentFragment, unknown>;
export const ChargeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Charge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"}},{"kind":"Field","name":{"kind":"Name","value":"pricing"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeRates"}},{"kind":"Field","name":{"kind":"Name","value":"localExchangeRates"}},{"kind":"Field","name":{"kind":"Name","value":"hostedUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cancelUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"feeRate"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerChargeFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"unresolvedReason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commissionId"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"commissionRate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"isTransferred"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"purchaseActivity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseActivityId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenPriceId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenAmount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}}]} as unknown as DocumentNode<ChargeFragmentFragment, unknown>;
export const CustomerRefFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerRefFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}}]} as unknown as DocumentNode<CustomerRefFragmentFragment, unknown>;
export const CustomerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"emailStatus"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"referralCustomerId"}},{"kind":"Field","name":{"kind":"Name","value":"referees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerRefFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referrer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerRefFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerRefFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}}]} as unknown as DocumentNode<CustomerFragmentFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokens"}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const SuspendCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SuspendCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suspendCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerChargeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}}]} as unknown as DocumentNode<SuspendCustomerMutation, SuspendCustomerMutationVariables>;
export const ReinstateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReinstateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reinstateCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"referralCustomerId"}}]}}]}}]} as unknown as DocumentNode<ReinstateCustomerMutation, ReinstateCustomerMutationVariables>;
export const ProtectedMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProtectedMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protectedMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sub"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<ProtectedMethodQuery, ProtectedMethodQueryVariables>;
export const GetChargesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCharges"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCharges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChargeFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextPageCursor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"customerStatus"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChargeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Charge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"}},{"kind":"Field","name":{"kind":"Name","value":"pricing"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeRates"}},{"kind":"Field","name":{"kind":"Name","value":"localExchangeRates"}},{"kind":"Field","name":{"kind":"Name","value":"hostedUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cancelUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"feeRate"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerChargeFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"unresolvedReason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commissionId"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"commissionRate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"isTransferred"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"purchaseActivity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseActivityId"}},{"kind":"Field","name":{"kind":"Name","value":"chargeId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenPriceId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenAmount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetChargesQuery, GetChargesQueryVariables>;