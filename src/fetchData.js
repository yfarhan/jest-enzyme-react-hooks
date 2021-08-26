const fetchData = () =>
  new Promise(function (res) {
    const data = {
      firstName: 'fname',
      lastName: 'lname',
      nickName: 'F',
    };

    setTimeout(() => res(data), 1000);
  });

export default fetchData;
