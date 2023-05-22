const fetchFirstName = (name) => {
  if(!name) return '';
  const firstName = name.split(' ')[0];
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
};

export default fetchFirstName;