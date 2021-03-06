import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 15 },
    { duration: '20s', target: 15 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'],
  },
};

export default function () {
  const res = http.get('https://sandbox.apis.who.int:443/who/dev/example-cicd-validation/api/v1/validation');
  sleep(1);
}
