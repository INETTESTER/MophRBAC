import http from 'k6/http';

export function token() {
  const url = 'https://moph-rbac.id.th/api/v1/token?Action=get_moph_access_token&user=system_dev&password_hash=AD1F08EF0CA9CC007696D1CB46E2342B782FE7D04D244083DFC6A0443CA1945D&hospital_code=25039';

  const res = http.post(url);

  //console.log('Response body:', res.body);

  return res;
}
