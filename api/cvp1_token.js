import http from 'k6/http';

export function cvp1_token() {
  const url = 'https://moph-rbac.id.th/api/v1/cvp1/token?Action=get_moph_access_token_idp';

  const payload = JSON.stringify({
    user: "1349700192852",
    password_hash: "0771AD25F03D37A3690A05AB2199AF26C11CDE72FE3D10FD1A374C36DA427E55",
    hospital_code: "00000",
    name: "นางสาวทดสอบ นามสกุลเทส",
    hospital_name: "โรงพยาบาลทดสอบ",
    ip: "123.123.123.123",
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

  const res = http.post(url, payload, { headers });

  //console.log('Response body:', res.body);

  return res;
}
