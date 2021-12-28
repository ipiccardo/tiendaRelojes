function UserProfile({ currentUser }) {
  const { first, last } = currentUser.name;
  const { medium } = currentUser.picture;
  return (
    <>
      <img alt={`${first}`} src={medium} />

      <h1>
        {first} {last}
      </h1>
    </>
  );
}

export default UserProfile;
