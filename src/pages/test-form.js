function TestForm() {
  return (
    <form action={'/api/memory'} encType='multipart/form-data' method='post'>
      <p>
        <input type='file' name='f' />
        <input type='submit' value='Отправить' />
      </p>
    </form>
  );
}

export default TestForm;
