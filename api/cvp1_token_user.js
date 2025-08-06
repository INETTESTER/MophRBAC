import http from 'k6/http';

export function cvp1_token_user() {
  const url = 'https://moph-rbac.id.th/api/v1/cvp1/token?Action=get_moph_access_token_idp';

  const payload = JSON.stringify({
    user: "1102700429866",
    password_hash: "8C9672901A22D80B45FA2AB0B31E15645F25277CCB5EA96C4637D67783B06B18",
    hospital_code: "00000",
    name: "นางสาวทดสอบ นามสกุลเทส",
    hospital_name: "โรงพยาบาลทดสอบ",
    ip: "123.123.10.10",
    email: "test@mail.com",
    provider_id: "01234567",
    position_std_id: 9999,
    position_std_type_id: 24,
    position_std_name: "แพทย์",
    position_std_type_name: "แพทย์",
    license_no: "12345"
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = http.post(url, payload, { headers });

  //console.log('🔁 Response body:\n' + response.body);

  return response;
}
