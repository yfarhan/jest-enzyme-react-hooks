const fetchData = () =>
  new Promise(function (res) {
    const data = {
      firstName: 'Yaser',
      lastName: 'Syed',
      nickName: 'Farhan',
    };

    setTimeout(() => res(data), 1000);
  });

export default fetchData;
