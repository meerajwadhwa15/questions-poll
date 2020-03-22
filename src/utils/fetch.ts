import axios from "axios";

export type ServerProps = {
  url: string;
  data?: object;
  params?: object;
  method?: 'GET' | 'POST'
};

export type responseProps = {
  data: [] | {};
};

function Fetch({ url, data = {}, params = {}, method = 'GET' }: ServerProps) {
  return axios.request({
    url,
    method,
    data,
    params
  });
}

export default Fetch;
