/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($input: LoginInput!) {\n  login(input: $input)\n}\n\nmutation Logout {\n  logout\n}\n\nmutation RefreshTokens {\n  refreshTokens\n}\n\nmutation SuspendCustomer($customerId: Int!) {\n  suspendCustomer(customerId: $customerId) {\n    ...CustomerChargeFragment\n  }\n}\n\nmutation ReinstateCustomer($customerId: Int!) {\n  reinstateCustomer(customerId: $customerId) {\n    customerId\n    name\n    email\n    customerStatus\n    referralCode\n    referralCustomerId\n  }\n}\n\nquery ProtectedMethod {\n  protectedMethod {\n    sub\n    email\n    role\n  }\n}": types.LoginDocument,
    "query GetCharges($code: String, $cursor: Int, $customerId: Int, $limit: Int!) {\n  getCharges(code: $code, cursor: $cursor, customerId: $customerId, limit: $limit) {\n    data {\n      ...ChargeFragment\n    }\n    nextPageCursor\n  }\n}\n\nfragment CustomerChargeFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n}\n\nfragment ChargeFragment on Charge {\n  chargeId\n  code\n  name\n  description\n  pricingType\n  addresses\n  pricing\n  exchangeRates\n  localExchangeRates\n  hostedUrl\n  cancelUrl\n  redirectUrl\n  feeRate\n  expiresAt\n  paymentThreshold\n  createdAt\n  updatedAt\n  customer {\n    ...CustomerChargeFragment\n  }\n  payments {\n    paymentId\n    chargeId\n    network\n    transaction\n    value\n    type\n    status\n    paymentStatus\n    unresolvedReason\n    createdAt\n    updatedAt\n  }\n  commissions {\n    commissionId\n    customerId\n    chargeId\n    tier\n    commissionRate\n    amount\n    currency\n    isTransferred\n    createdAt\n    updatedAt\n  }\n  purchaseActivity {\n    purchaseActivityId\n    chargeId\n    packageId\n    tokenPriceId\n    tokenAmount\n    price\n    amount\n    currency\n    purchaseConfirmed\n    paymentStatus\n    createdAt\n    updatedAt\n  }\n}": types.GetChargesDocument,
    "fragment CustomerRefFragment on Customer {\n  customerId\n  name\n  email\n  referralCode\n  customerStatus\n}\n\nfragment CustomerFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n  createdAt\n  updatedAt\n  emailStatus\n  referralCode\n  referralCustomerId\n  referees {\n    ...CustomerRefFragment\n  }\n  referrer {\n    ...CustomerRefFragment\n  }\n  wallets {\n    walletId\n  }\n}": types.CustomerRefFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LoginInput!) {\n  login(input: $input)\n}\n\nmutation Logout {\n  logout\n}\n\nmutation RefreshTokens {\n  refreshTokens\n}\n\nmutation SuspendCustomer($customerId: Int!) {\n  suspendCustomer(customerId: $customerId) {\n    ...CustomerChargeFragment\n  }\n}\n\nmutation ReinstateCustomer($customerId: Int!) {\n  reinstateCustomer(customerId: $customerId) {\n    customerId\n    name\n    email\n    customerStatus\n    referralCode\n    referralCustomerId\n  }\n}\n\nquery ProtectedMethod {\n  protectedMethod {\n    sub\n    email\n    role\n  }\n}"): (typeof documents)["mutation Login($input: LoginInput!) {\n  login(input: $input)\n}\n\nmutation Logout {\n  logout\n}\n\nmutation RefreshTokens {\n  refreshTokens\n}\n\nmutation SuspendCustomer($customerId: Int!) {\n  suspendCustomer(customerId: $customerId) {\n    ...CustomerChargeFragment\n  }\n}\n\nmutation ReinstateCustomer($customerId: Int!) {\n  reinstateCustomer(customerId: $customerId) {\n    customerId\n    name\n    email\n    customerStatus\n    referralCode\n    referralCustomerId\n  }\n}\n\nquery ProtectedMethod {\n  protectedMethod {\n    sub\n    email\n    role\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCharges($code: String, $cursor: Int, $customerId: Int, $limit: Int!) {\n  getCharges(code: $code, cursor: $cursor, customerId: $customerId, limit: $limit) {\n    data {\n      ...ChargeFragment\n    }\n    nextPageCursor\n  }\n}\n\nfragment CustomerChargeFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n}\n\nfragment ChargeFragment on Charge {\n  chargeId\n  code\n  name\n  description\n  pricingType\n  addresses\n  pricing\n  exchangeRates\n  localExchangeRates\n  hostedUrl\n  cancelUrl\n  redirectUrl\n  feeRate\n  expiresAt\n  paymentThreshold\n  createdAt\n  updatedAt\n  customer {\n    ...CustomerChargeFragment\n  }\n  payments {\n    paymentId\n    chargeId\n    network\n    transaction\n    value\n    type\n    status\n    paymentStatus\n    unresolvedReason\n    createdAt\n    updatedAt\n  }\n  commissions {\n    commissionId\n    customerId\n    chargeId\n    tier\n    commissionRate\n    amount\n    currency\n    isTransferred\n    createdAt\n    updatedAt\n  }\n  purchaseActivity {\n    purchaseActivityId\n    chargeId\n    packageId\n    tokenPriceId\n    tokenAmount\n    price\n    amount\n    currency\n    purchaseConfirmed\n    paymentStatus\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetCharges($code: String, $cursor: Int, $customerId: Int, $limit: Int!) {\n  getCharges(code: $code, cursor: $cursor, customerId: $customerId, limit: $limit) {\n    data {\n      ...ChargeFragment\n    }\n    nextPageCursor\n  }\n}\n\nfragment CustomerChargeFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n}\n\nfragment ChargeFragment on Charge {\n  chargeId\n  code\n  name\n  description\n  pricingType\n  addresses\n  pricing\n  exchangeRates\n  localExchangeRates\n  hostedUrl\n  cancelUrl\n  redirectUrl\n  feeRate\n  expiresAt\n  paymentThreshold\n  createdAt\n  updatedAt\n  customer {\n    ...CustomerChargeFragment\n  }\n  payments {\n    paymentId\n    chargeId\n    network\n    transaction\n    value\n    type\n    status\n    paymentStatus\n    unresolvedReason\n    createdAt\n    updatedAt\n  }\n  commissions {\n    commissionId\n    customerId\n    chargeId\n    tier\n    commissionRate\n    amount\n    currency\n    isTransferred\n    createdAt\n    updatedAt\n  }\n  purchaseActivity {\n    purchaseActivityId\n    chargeId\n    packageId\n    tokenPriceId\n    tokenAmount\n    price\n    amount\n    currency\n    purchaseConfirmed\n    paymentStatus\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CustomerRefFragment on Customer {\n  customerId\n  name\n  email\n  referralCode\n  customerStatus\n}\n\nfragment CustomerFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n  createdAt\n  updatedAt\n  emailStatus\n  referralCode\n  referralCustomerId\n  referees {\n    ...CustomerRefFragment\n  }\n  referrer {\n    ...CustomerRefFragment\n  }\n  wallets {\n    walletId\n  }\n}"): (typeof documents)["fragment CustomerRefFragment on Customer {\n  customerId\n  name\n  email\n  referralCode\n  customerStatus\n}\n\nfragment CustomerFragment on Customer {\n  customerId\n  name\n  email\n  customerStatus\n  createdAt\n  updatedAt\n  emailStatus\n  referralCode\n  referralCustomerId\n  referees {\n    ...CustomerRefFragment\n  }\n  referrer {\n    ...CustomerRefFragment\n  }\n  wallets {\n    walletId\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;