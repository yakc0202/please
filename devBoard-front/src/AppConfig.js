let backendHost;

const hostname = window && window.location && window.location.hostname;

backendHost = "http://172.18.0.3:8090";


export const API_BASE_URL = `${backendHost}`;

export const locations = [
  "서울",
  "부산",
  "대구",
  "대전",
  "울산",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
];
