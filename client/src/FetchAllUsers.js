import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_USERS_DATA = gql`
  query GetAllUsers {
    users {
      id
      username
      name
    }
  }
`;

const GET_MOVIE_DATA = gql`
  query GetMovies {
    movies {
      title
      description
    }
  }
`;

const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
    }
  }
`;

const FetchAllUsers = () => {
  const { data, loading } = useQuery(GET_USERS_DATA);
  const { data: movieslist } = useQuery(GET_MOVIE_DATA);
  const [searchUserId, setSearchUserId] = useState("");
  const searchHandler = (event) => {
    let id = event.target.value;
    let NumberId = Number(id);
    setSearchUserId(NumberId);
  };
  const [fetchUser, { data: UserData, error: userError }] =
    useLazyQuery(GET_USER);
  return (
    <>
      <div>
        {loading ? (
          "loading..."
        ) : (
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>
                {user.username}:<b>{user.name}</b>
              </li>
            ))}
          </ul>
        )}
      </div>

      <section>
        <input
          type="text"
          placeholder="Enter username..."
          onChange={searchHandler}
        />
        <button
          type="button"
          onClick={() => {
            fetchUser({
              variables: {
                userId: searchUserId,
              },
            });
          }}
        >
          Fetch Data
        </button>
        <article>
          <h1>{JSON.stringify(UserData)}</h1>
        </article>
      </section>
    </>
  );
};

export default FetchAllUsers;
