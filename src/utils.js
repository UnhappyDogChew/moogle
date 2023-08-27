import axios from "axios";

export const parseSearch = (search) => {
  const result = {};
  const regex = /([a-zA-Z0-9\_]+)=([a-zA-Z0-9\_\%]+)/g;
  let arr = regex.exec(search);
  while (arr) {
    result[arr[1]] = decodeURIComponent(arr[2]);
    arr = regex.exec(search);
  }
  return result;
};

export const getMovies = (params, onSuccess, onError) => {
  axios({
    method: "get",
    url: "/search/movie",
    baseURL: window.env.API_URL,
    headers: {
      Authorization: `Bearer ${window.env.API_TOKEN}`,
    },
    params: params,
  })
    .then(onSuccess)
    .catch(onError);
};

export const moveToSearchResult = ({
  query,
  language = "ko-KR",
  includeAdult = false,
  year,
  page = 1,
}) => {
  const url =
    `/search?query=${query}&language=${language}&include_adult=${includeAdult}` +
    (year ? `&year=${year}` : "") +
    `&page=${page}`;
  window.location.href = url;
};
