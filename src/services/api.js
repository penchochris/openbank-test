const PRUEBA_OK = 'OK';

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

const submitForm = pass =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (pass === PRUEBA_OK ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  );

export { submitForm };
