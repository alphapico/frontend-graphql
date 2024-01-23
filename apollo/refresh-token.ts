// refreshToken.js
import { useMutation } from "@vue/apollo-composable";
import { RefreshTokensDocument } from "~/src/gql/graphql";

export function useRefreshToken() {
  const {
    mutate: refreshTokens,
    onDone,
    onError,
  } = useMutation(RefreshTokensDocument);

  const refreshToken = async () => {
    try {
      await refreshTokens();
    } catch (error) {
      // Handle token refresh errors
      console.error("Error refreshing tokens:", error);
      throw error;
    }
  };

  return { refreshToken, onDone, onError };
}
