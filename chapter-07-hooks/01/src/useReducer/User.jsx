import { useReducer } from "react";

const firstUser = {
  id: '0913-5283-6348',
  firstName: 'Bill',
  lastName: 'Wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'fewsaf@gmail.com',
  admin: false
};

export const User =() => {
  const [ user, setUser ] = useReducer((user, newDetail) => ({...user, ...newDetail}), firstUser);
  console.log(user);
  return(
    <>
      <button onClick={() => {
        setUser({admin: true})
      }}>
        Make adming
      </button>
      <p>{String(user.admin)}</p>
    </>
  )
}