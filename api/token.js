import http from 'k6/http';

export function token() {
  const url = 'https://moph-rbac.id.th/api/v1/token?Action=get_moph_access_token&user=Mallika.dev&password_hash=FC4BFDB41281744F341CBFB017F247DC9199C3EA877C3CD2D065D386029A8C38&hospital_code=25039';

  const res = http.post(url);

  //console.log('Response body:', res.body);

  return res;
}
